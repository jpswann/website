import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes";
import rateLimit from "express-rate-limit";
import { createClient } from "redis";

dotenv.config();

const app = express();
const PORT = 8000;

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: "Too many requests, please try again later.",
});

app.use(cors());
app.use(express.json());
app.use("/api", limiter);

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

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });

    const shutdown = async () => {
      console.log("\n🔌 Shutting down server...");
      await redisClient.quit();
      server.close(() => {
        console.log("👋 Server closed");
        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
