import { Box, Button, Typography } from "@mui/material";
import HomeCards from "../components/cards/HomeCards";
import ActionAreaCards from "../components/cards/ActionAreaCards";
import Chatbot from "../components/Chatbot";

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
          Navy Veteran | Software Engineer | Full Stack | Client Relation
          Management | Project Management | DB Management
        </Typography>
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
      <Box sx={{ ml: 20, mb: 2, mt: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem" },
          }}
        >
          Personal Assistant:
        </Typography>
      </Box>
      <Chatbot />
    </>
  );
};

export default HomePage;
