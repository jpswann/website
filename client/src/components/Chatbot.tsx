import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Messages } from "../interfaces/interfaces";
import { SYSTEM_MESSAGE } from "../data/chatbotSystemMessage";
import { useWebSocket } from "../context/WebSocketContext";

const Chatbot = () => {
  const [messages, setMessages] = useState<Messages[]>(SYSTEM_MESSAGE);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { ws, sendMessage } = useWebSocket();

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.role === "assistant" && data.content) {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: data.content },
          ]);
          setIsSending(false);
        }
      } catch (err) {
        console.error("Error parsing WS message:", err);
      }
    };

    return () => {
      if (ws.current) {
        ws.current.onmessage = null;
      }
    };
  }, [ws, messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendChatMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim() || isSending) return;

    if (!ws.current || ws.current.readyState !== WebSocket.OPEN) {
      console.error("WebSocket not connected");
      return;
    }

    setIsSending(true);

    const updatedMessages: Messages[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    try {
      sendMessage(updatedMessages);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Grid container sx={{ mx: 20 }}>
      <Box
        sx={{
          width: "100%",
          mx: "auto",
          p: 3,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 3,
          height: "50vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            mb: 2,
            pr: 1,
          }}
        >
          {messages
            .filter((msg) => msg.role !== "system")
            .map((msg, index) => (
              <Box
                key={index}
                className={`message-container ${
                  msg.role === "assistant" ? "assistant" : "user"
                }`}
                sx={{
                  backgroundColor:
                    msg.role === "assistant" ? "#f0f0f0" : "#333333",
                  color: msg.role === "assistant" ? "black" : "white",
                  padding: 2,
                  borderRadius: 2,
                  marginBottom: 1.5,
                  maxWidth: "80%",
                  alignSelf:
                    msg.role === "assistant" ? "flex-start" : "flex-end",
                  wordBreak: "break-word",
                }}
              >
                <strong>{msg.role}:</strong>{" "}
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </Box>
            ))}
          <div ref={bottomRef} />
        </Box>
        <Box
          component="form"
          className="centered-box"
          noValidate
          autoComplete="off"
          onSubmit={sendChatMessage}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 2,
            mx: "auto",
          }}
        >
          <TextField
            id="user-input"
            label="Start typing your question..."
            variant="outlined"
            value={input}
            onChange={handleChange}
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="contained"
            className="button"
            type="submit"
            disabled={isSending}
            sx={{ px: 4, py: 1.5, borderRadius: 2 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Chatbot;
