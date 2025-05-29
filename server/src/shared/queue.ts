import amqplib, { Connection, Channel } from "amqplib";

let connection: Connection | null = null;
let channel: Channel | null = null;

const QUEUE_NAME = "chatbot_tasks";

export const connectQueue = async () => {
  if (!process.env.RABBITMQ_URL) {
    throw new Error("RABBITMQ_URL is not defined in environment variables");
  }

  connection = await amqplib.connect(process.env.RABBITMQ_URL);
  channel = await connection.createChannel();

  await channel.assertQueue(QUEUE_NAME, {
    durable: true,
  });

  console.log(`📥 Connected to RabbitMQ queue: ${QUEUE_NAME}`);

  return channel;
};

export const publishToQueue = async (message: object) => {
  if (!channel) {
    throw new Error(
      "RabbitMQ channel not initialized. Call connectQueue() first."
    );
  }

  const buffer = Buffer.from(JSON.stringify(message));
  const ok = channel.sendToQueue(QUEUE_NAME, buffer, {
    persistent: true,
  });

  if (!ok) {
    console.warn("⚠️ Message was not sent successfully. Queue may be full.");
  } else {
    console.log(`📤 Message sent: ${JSON.stringify(message)}`);
  }
};
