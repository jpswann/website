import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to My Developer Portfolio
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Building clean, scalable, and modern applications with React,
            Node.js, and more.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://github.com/jpswann?tab=repositories"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mr: 3 }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/technicialskills"
          >
            View Skills
          </Button>
        </Box>

        {/* Featured Cards */}
        <Grid container spacing={4}>
          {[
            {
              title: "Frontend Development",
              text: "React, TypeScript, SCSS, MUI, and responsive UI/UX best practices.",
            },
            {
              title: "Backend Development",
              text: "Node.js, Express, RESTful APIs, and microservice architecture.",
            },
            {
              title: "Database Design",
              text: "MySQL, PostgreSQL, MongoDB, and optimized schema design for scalability.",
            },
            {
              title: "DevOps & Deployment",
              text: "Docker, GitHub Actions, and cloud hosting with IBM or AWS.",
            },
            {
              title: "Security & Best Practices",
              text: "Authentication, OWASP, HTTPS, JWT, and secure coding practices.",
            },
            {
              title: "Testing & QA",
              text: "Unit, integration, E2E tests, and code reviews for reliability and safety.",
            },
          ].map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }} display="flex">
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
