import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getOrCreateSessionId } from "../utils/session";

interface Props {}

const Contact: React.FC<Props> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const ws = useRef<WebSocket | null>(null);
  const [sessionId] = useState(getOrCreateSessionId());
  const WS_URL = `ws://localhost:8000/?sessionId=${sessionId}`;
  const connectedRef = useRef(false);

  const [form, setForm] = useState({
    f_name: "",
    l_name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    ws.current = new WebSocket(WS_URL);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setIsSending(false);
      } catch (err) {
        console.error("Error parsing WS message:", err);
      }
    };

    ws.current.onerror = (event) => {
      console.error("WebSocket error:", event);
      if (ws.current?.readyState !== WebSocket.OPEN) {
        console.error("WebSocket is not open:", ws.current?.readyState);
      }
    };

    ws.current.onclose = (event) => {
      console.log("WebSocket closed", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
      });
    };

    return () => {
      if (ws.current) {
        ws.current.close(1000, "Component unmounting");
        ws.current = null;
        connectedRef.current = false;
      }
    };
  }, [isSending]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form) return;

    setIsSending(true);

    try {
      await axios.post("/api/email", form);

      setSubmitted(true);
      setForm({ f_name: "", l_name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Contact me
        </Typography>
        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Thank you! Your message has been sent.
          </Alert>
        )}

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              required
              fullWidth
              label="First Name"
              name="f_name"
              value={form.f_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              required
              fullWidth
              label="Last Name"
              name="l_name"
              value={form.l_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="button contact-button"
              disabled={isSending}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
