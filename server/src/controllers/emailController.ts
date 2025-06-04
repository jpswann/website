import { Request, Response } from "express";
import opossum from "opossum";
import { connectQueue } from "../shared/queue";
import nodemailer from "nodemailer";

const breakerOptions = {
  timeout: 5000,
  errorThresholdPercentage: 50,
  resetTimeout: 10000,
};

const createTransporter = async () => {
  const transporter = await nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
};

const sendEmail = async (form: {
  f_name: string;
  l_name: string;
  email: string;
  message: string;
}) => {
  const transporter = await createTransporter();

  const mailOptions = {
    from: `"${form.f_name} ${form.l_name}" <${form.email}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `Contact form message from ${form.f_name} ${form.l_name}`,
    text: form.message,
    html: `
      <p><strong>From:</strong> ${form.f_name} ${form.l_name} (${
      form.email
    })</p>
      <p><strong>Message:</strong></p>
      <p>${form.message.replace(/\n/g, "<br>")}</p>
    `,
  };
  console.log("SMTP_HOST:", process.env.SMTP_HOST);
  console.log("SMTP_PORT:", process.env.SMTP_PORT);
  console.log("SMTP_SECURE:", process.env.SMTP_SECURE);

  await transporter.sendMail(mailOptions).catch((err) => console.log(err));
};

const breaker = new opossum(sendEmail, breakerOptions);

breaker.fallback(() => {
  return "Email failed to send. Please try again.";
});

breaker.on("timeout", () => {
  console.warn("Breaker timed out!");
});

export const sendEmailToQueue = async (req: Request, res: Response) => {
  const { form } = req.body;
  const rabbitChannel = req.app.locals.rabbitChannel;

  try {
    await rabbitChannel.sendToQueue(
      "email_messages",
      Buffer.from(JSON.stringify({ form: form }))
    );
    res.status(200).json({ message: "Email queued successfully" });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const processMessage = async (data: { form: any }) => {
  const { form } = data;

  try {
    if (!form) {
      throw new Error("Missing form");
    }

    const response = await breaker.fire(form);

    console.log(`Processed email for  ${form.email}`);

    return response;
  } catch (error) {
    console.error("Error in worker:", error);
    return null;
  }
};

export const runWorker = async () => {
  const channel = await connectQueue();

  await channel.assertQueue("email_messages", { durable: true });

  channel.consume("email_messages", async (msg) => {
    if (msg !== null) {
      const data = JSON.parse(msg.content.toString());
      await processMessage(data);
      channel.ack(msg);
    }
  });

  console.log("Worker is running and waiting for messages...");
};
