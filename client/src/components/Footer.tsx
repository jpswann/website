import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/jpswann?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/jpswann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            href="https://x.com/jpswann2192"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} JPSwann ·{" "}
          <Link
            href="https://github.com/JPSwann"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            GitHub
          </Link>{" "}
          · All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
