import { Box, Typography } from "@mui/material";
import FrontendCards from "../components/cards/FrontendCards";

const Frontend = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", mb: 2, mt: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          Frontend Projects
        </Typography>
      </Box>
      <FrontendCards />
    </>
  );
};

export default Frontend;
