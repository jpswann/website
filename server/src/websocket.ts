// websocket.ts
import WebSocket, { WebSocketServer } from "ws";
import { Channel } from "amqplib"; // assuming this is the type of your channel

type ClientsMap = Map<string, WebSocket>;

export function setupWebSocketServer(
  server: import("http").Server,
  channel: Channel
) {
  const wss = new WebSocketServer({ server });

  const clients: ClientsMap = new Map();

  const REQUEST_QUEUE = "chatbot_messages";
  const RESPONSE_QUEUE = "chatbot_responses";

  // Consume responses from RabbitMQ and forward to client WS
  channel.assertQueue(RESPONSE_QUEUE, { durable: true }).then(() => {
    channel.consume(RESPONSE_QUEUE, (msg) => {
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
        channel.ack(msg);
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

    // Close previous WS if duplicate connection for same sessionId
    if (clients.has(sessionId)) {
      const existing = clients.get(sessionId);
      existing?.close(1000, "Duplicate connection");
    }

    clients.set(sessionId, ws);

    ws.on("message", async (message) => {
      try {
        const parsed = JSON.parse(message.toString());
        const { content } = parsed;

        // Enqueue user message to RabbitMQ for processing
        await channel.assertQueue(REQUEST_QUEUE, { durable: true });
        const payload = { sessionId, message: content };
        channel.sendToQueue(
          REQUEST_QUEUE,
          Buffer.from(JSON.stringify(payload)),
          { persistent: true }
        );
      } catch (err) {
        console.error("Error handling WS message:", err);
      }
    });

    ws.on("close", () => {
      clients.delete(sessionId);
    });
  });

  return wss;
}
