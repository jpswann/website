import { Box, Button, Typography } from "@mui/material";
import HomeCards from "../components/HomeCards";
import ActionAreaCards from "../components/ActionAreaCards";

const HomePage = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", mb: 2, mt: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          Welcome to My Developer Portfolio
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          sx={{
            mb: 2,
            mx: { xs: "1rem" },
            fontSize: {
              xs: ".5rem",
              sm: ".9rem",
            },
          }}
        >
          Software Engineer | Full Stack | Client Relation Management | Project
          Management | DB Management
        </Typography>
        {/* <Typography variant="h6" color="textSecondary">
          Building clean, scalable, and modern applications with React, Node.js,
          and more.
        </Typography> */}
        <br />
        <Button
          variant="contained"
          className="button"
          href="https://github.com/jpswann"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Projects
        </Button>
      </Box>
      <HomeCards />
      <ActionAreaCards />
    </>
  );
};

export default HomePage;
