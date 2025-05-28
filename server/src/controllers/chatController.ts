import { Request, Response } from "express";
import axios from "axios";

export const getChat = async (req: Request, res: Response) => {
  try {
    const redisClient = req.app.locals.redisClient;
    const { messages, sessionId } = req.body;
    const apiUrl = process.env.GROQ_API_URL;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiUrl || !apiKey) {
      throw new Error(
        "Missing GROQ_API_URL or GROQ_API_KEY in environment variables"
      );
    }

    if (!sessionId) {
      throw new Error("Missing sessionId in request");
    }

    const redisKey = `chat:${sessionId}`;

    let updatedMessages: any[] = [];
    const cached = await redisClient.get(redisKey);

    if (cached) {
      const previousMessages = JSON.parse(cached);
      updatedMessages = [...previousMessages, ...messages];
    } else {
      updatedMessages = [...messages]; // start a new chat
    }

    updatedMessages
      .filter((msg: any) => msg.role === "user")
      .forEach((msg: any) => console.log("User:", msg.content));

    const MAX_HISTORY = 10;
    const trimmedHistory = updatedMessages.slice(-MAX_HISTORY);

    const response = await axios.post(
      apiUrl,
      {
        model: "llama-3.3-70b-versatile",
        messages: trimmedHistory,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const aiMessage =
      response.data.choices[0]?.message?.content || "No response from AI";

    updatedMessages.push({
      role: "assistant",
      content: aiMessage,
    });

    await redisClient.set(redisKey, JSON.stringify(updatedMessages), {
      EX: 3600,
    });

    res.status(200).json(aiMessage);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      res.status(500).json({ error: error.response?.data || error.message });
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
