import { Request, Response } from "express";
import opossum from "opossum";
import { connectQueue } from "../shared/queue";
import emailjs from "emailjs-com";

const breakerOptions = {
  timeout: 5000,
  errorThresholdPercentage: 50,
  resetTimeout: 10000,
};

const sendEmail = async (
  service_id: string,
  template_id: string,
  form: {
    f_name: string;
    l_name: string;
    email: string;
    message: string;
  },
  public_key: string
) => {
  await emailjs
    .send(service_id, template_id, form, public_key)
    .catch((error: any) => {
      console.error("Error emailjs: ", error);
    });
};

const breaker = new opossum(sendEmail, breakerOptions);

breaker.fallback(() => {
  return "Email failed to send. Please try again.";
});

breaker.on("timeout", () => {
  console.warn("Breaker timed out!");
});

export const sendEmailToQueue = async (req: Request, res: Response) => {
  const { sessionId, form } = req.body;
  const rabbitChannel = req.app.locals.rabbitChannel;

  try {
    await rabbitChannel.sendToQueue(
      "email_messages",
      Buffer.from(JSON.stringify({ sessionId, form: form }))
    );
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const processMessage = async (data: {
  sessionId: string;
  form: any;
}) => {
  const { sessionId, form } = data;

  try {
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!service_id || !template_id || !public_key) {
      throw new Error("Missing environment variables");
    }

    const response = await breaker.fire(
      service_id,
      template_id,
      form,
      public_key
    );

    console.log(`Processed email for session ${sessionId}`);

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
