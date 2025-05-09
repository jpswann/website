import { Box, Typography, Container } from "@mui/material";
import HomeCards from "../components/HomeCards";
import SkillCards from "../components/SkillCards";
import About from "../components/About";

const HomePage = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1">
          Welcome to My Developer Portfolio
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Building clean, scalable, and modern applications with React, Node.js,
          and more.
        </Typography>
        <HomeCards />
      </Box>

      <About />

      <SkillCards />
    </>
  );
};

export default HomePage;
