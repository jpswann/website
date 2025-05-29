import { Request, Response } from "express";
import axios from "axios";
import opossum from "opossum";
import { connectQueue } from "../shared/queue";
import { createClient, RedisClientType } from "redis";

const breakerOptions = {
  timeout: 5000,
  errorThresholdPercentage: 50,
  resetTimeout: 10000,
};

const callGroq = async (apiUrl: string, apiKey: string, messages: any[]) => {
  return axios.post(
    apiUrl,
    {
      model: "llama-3.3-70b-versatile",
      messages,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
};

const breaker = new opossum(callGroq, breakerOptions);

export const sendChatToQueue = async (req: Request, res: Response) => {
  const { sessionId, messages } = req.body;
  const rabbitChannel = req.app.locals.rabbitChannel;
  const redisClient = req.app.locals.redisClient;

  const redisKey = `chat:${sessionId}`;
  let updatedMessages: any[] = [];

  const cached = await redisClient.get(redisKey);

  if (cached) {
    const previousMessages = JSON.parse(cached);
    updatedMessages = [...previousMessages, ...messages];
  } else {
    updatedMessages = [...messages];
  }

  const MAX_HISTORY = 10;
  const trimmedHistory = updatedMessages.slice(-MAX_HISTORY);

  try {
    await rabbitChannel.sendToQueue(
      "chatbot_messages",
      Buffer.from(JSON.stringify({ sessionId, messages: trimmedHistory }))
    );
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const processMessage = async (
  data: {
    sessionId: string;
    messages: any[];
  },
  redisClient: ReturnType<typeof createClient>,
  channel: any
) => {
  const { sessionId, messages } = data;
  const redisKey = `chat:${sessionId}`;

  try {
    const apiUrl = process.env.GROQ_API_URL;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiUrl || !apiKey) {
      throw new Error(
        "Missing GROQ_API_URL or GROQ_API_KEY in environment variables"
      );
    }

    const response = await breaker.fire(apiUrl, apiKey, messages);

    const aiMessage =
      response.data.choices[0]?.message?.content || "No response from AI";

    const updatedMessages = [
      ...messages,
      { role: "assistant", content: aiMessage },
    ];

    await redisClient.set(redisKey, JSON.stringify(updatedMessages), {
      EX: 3600,
    });

    console.log(`✅ Processed message for session ${sessionId}`);

    channel.sendToQueue(
      "chatbot_responses",
      Buffer.from(JSON.stringify({ sessionId, response: aiMessage })),
      { persistent: true }
    );

    return aiMessage;
  } catch (error) {
    console.error("❌ Error in worker:", error);
    return null;
  }
};

export const runWorker = async (
  redisClient: ReturnType<typeof createClient>
) => {
  const channel = await connectQueue();

  await channel.assertQueue("chatbot_messages", { durable: true });
  await channel.assertQueue("chatbot_responses", { durable: true });

  channel.consume("chatbot_messages", async (msg) => {
    if (msg !== null) {
      const data = JSON.parse(msg.content.toString());
      await processMessage(data, redisClient, channel);
      channel.ack(msg);
    }
  });

  console.log("👷 Worker is running and waiting for messages...");
};
