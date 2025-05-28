import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes";
import { createClient } from "redis";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const redisClient = createClient();

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

async function startServer() {
  try {
    await redisClient.connect();
    console.log("Connected to Redis");

    app.locals.redisClient = redisClient;

    app.use("/api/chatbot", chatRoutes);

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to Redis:", error);
    process.exit(1);
  }
}

startServer();
