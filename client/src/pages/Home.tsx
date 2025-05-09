import { Box, Typography, Button, Container, Grid } from "@mui/material";
import HomeCards from "../components/HomeCards";
import SkillCards from "../components/SkillCards";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Developer Portfolio
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Building clean, scalable, and modern applications with React, Node.js,
          and more.
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
      </Box>

      <Grid container spacing={4}>
        <HomeCards />
      </Grid>
      <Grid container spacing={3}>
        <SkillCards />
      </Grid>
    </Container>
  );
};

export default HomePage;
