import { Request, Response } from "express";
import axios from "axios";

export const getChat = async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;
    const apiUrl = process.env.GROQ_API_URL;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiUrl || !apiKey) {
      throw new Error(
        "Missing GROQ_API_URL or GROQ_API_KEY in environment variables"
      );
    }

    const response = await axios.post(
      apiUrl,
      {
        model: "llama-3.3-70b-versatile",
        messages: messages,
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

    console.log("Response:", aiMessage);
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
