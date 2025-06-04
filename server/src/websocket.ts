import WebSocket, { WebSocketServer } from "ws";
import { Channel } from "amqplib";
import { sendChatToQueue } from "./controllers/chatController";
import { createClient } from "redis";

type ClientsMap = Map<string, WebSocket>;

export function setupWebSocketServer(
  server: import("http").Server,
  rabbitChannel: Channel,
  redisClient: ReturnType<typeof createClient>
) {
  const wss = new WebSocketServer({ server });

  const clients: ClientsMap = new Map();

  const REQUEST_QUEUE = "chatbot_messages";
  const RESPONSE_QUEUE = "chatbot_responses";

  rabbitChannel.assertQueue(RESPONSE_QUEUE, { durable: true }).then(() => {
    rabbitChannel.consume(RESPONSE_QUEUE, (msg) => {
      if (!msg) return;

      try {
        const data = JSON.parse(msg.content.toString());
        const { sessionId, response } = data;

        const ws = clients.get(sessionId);
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ role: "assistant", content: response }));
        }
      } catch (err) {
        console.error("Error parsing message from RabbitMQ:", err);
      } finally {
        rabbitChannel.ack(msg);
      }
    });
  });

  wss.on("connection", (ws, req) => {
    console.log("New WS connection, url:", req.url);

    const urlParams = new URLSearchParams(req.url?.split("?")[1]);
    const sessionId = urlParams.get("sessionId");

    if (!sessionId) {
      ws.close(1008, "No sessionId provided");
      return;
    }

    if (clients.has(sessionId)) {
      const existing = clients.get(sessionId);
      existing?.close(1000, "Duplicate connection");
    }

    clients.set(sessionId, ws);

    ws.send(
      JSON.stringify({
        role: "assistant",
        content: "Hello! I'm here to help you explore Jason's technical background, work experience, and personal projects. What would you like to know about Jason's skills and experiences?",
      })
    );

    ws.on("message", async (message) => {
      try {
        const parsed = JSON.parse(message.toString());

        await rabbitChannel.assertQueue(REQUEST_QUEUE, { durable: true });

        await sendChatToQueue(sessionId,parsed,rabbitChannel,redisClient)
      } catch (err) {
        console.error("Error handling WS message:", err);
      }
    });

    ws.on("close", () => {
      console.log("WS connection closed")
      clients.delete(sessionId);
    });
  });

  return wss;
}
