import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        🚧 Coming Soon
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        I'm working hard to bring you something awesome. Stay tuned!
      </Typography>
      <Box mt={4}>
        <Button
          className="button"
          variant="contained"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default ComingSoon;
