import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Message } from "../interfaces/interfaces";

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const SYSTEM_MESSAGE: Message = {
    role: "system",
    content: `You are a helpful assistant designed to answer questions about Jason's resume, technical background, work experience, and personal projects.
  Your responsibilities include:
  
  1. **Technical Background:** Explaining Jason's skills in JavaScript/Typescript, React, Node.js, Express, and Relational Databases.
  2. **Project Insights:** Describing technical projects like his Portfolio Chatbot Assistant using RabbitMQ, or scaling systems for millions of concurrent users.
  3. **Career Journey:** Sharing details about Jason's experience at IBM Cloud and his time in the Navy, including achievements like setting up a secure network while deployed.
  4. **Portfolio Guidance:** Helping users navigate and understand the structure, goals, and technologies behind Jason's portfolio site.
  5. **Soft Skills:** Highlighting Jason’s mentorship experience, problem-solving abilities, and communication strengths.
  
  If a user asks a question outside of Jason’s background, politely redirect them to focus on Jason’s portfolio or resume.`,
  };

  useEffect(() => {
    const setRoles = async () => {
      try {
        const response = await axios.post("/api/chatbot", {
          messages: [SYSTEM_MESSAGE],
        });

        setMessages([
          SYSTEM_MESSAGE,
          { role: "assistant", content: response.data },
        ]);
      } catch (error) {
        console.error("error setting role", error);
      }
    };
    setRoles();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim() || isSending) return;

    setIsSending(true);

    const updatedMessages: Message[] = [
      SYSTEM_MESSAGE,
      ...messages,
      { role: "user", content: input },
    ];

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    try {
      const response = await axios.post("/api/chatbot", {
        messages: updatedMessages,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data },
      ]);
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
          onSubmit={sendMessage}
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
