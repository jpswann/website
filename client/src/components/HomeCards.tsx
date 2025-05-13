import { Card, CardContent, Grid, Typography } from "@mui/material";
import { HomeCardProps } from "../interfaces/interfaces";

const HomeCards: React.FC = () => {
  const cards: HomeCardProps[] = [
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
  ];
  return (
    <Grid
      container
      maxWidth="lg"
      spacing={2}
      size={{ xs: 12, sm: 12, md: 4 }}
      sx={{ mt: 6, mb: 6 }}
      justifyContent="center"
      textAlign="center"
      justifySelf="center"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
            maxWidth: 345,
            minHeight: 100,
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
      ))}
    </Grid>
  );
};

export default HomeCards;
