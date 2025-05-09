import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import HomeCards from "../components/HomeCards";
import SkillCards from "../components/SkillCards";
import About from "../components/About";

const HomePage = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Developer Portfolio
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Building clean, scalable, and modern applications with React, Node.js,
          and more.
        </Typography>
      </Box>
      <Container>
        <HomeCards />
      </Container>

      <About />

      <SkillCards />
    </>
  );
};

export default HomePage;
