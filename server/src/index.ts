import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes";
import rateLimit from "express-rate-limit";
import { createClient } from "redis";
import { connectQueue } from "./shared/queue";
import { runWorker } from "./controllers/chatController";
import http from "http";
import { setupWebSocketServer } from "./websocket";

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
  const server = http.createServer(app);

  try {
    const channel = await connectQueue();
    console.log("Connected to RabbitMQ");

    await redisClient.connect();
    console.log("Connected to Redis");

    app.locals.redisClient = redisClient;
    app.locals.rabbitChannel = channel;

    await runWorker(redisClient);
    app.use("/api/chatbot", chatRoutes);

    app.get("/", (req, res) => {
      res.send("Server is running.");
    });

    // Setup WebSocket server with extracted function
    setupWebSocketServer(server, channel);

    server.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });

    // Graceful shutdown
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
