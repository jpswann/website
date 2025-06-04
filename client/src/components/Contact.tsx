import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import emailjs from "emailjs-com";

interface Props {}

const Contact: React.FC<Props> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [form, setForm] = useState({
    f_name: "",
    l_name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setDisabled(true);
    e.preventDefault();

    await emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSubmitted(true);
          setDisabled(false);
          setForm({ f_name: "", l_name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setDisabled(false);
        }
      );
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
              disabled={disabled}
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
