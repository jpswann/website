import { Box, Typography } from "@mui/material";
import BackendCards from "../components/cards/BackendCards";

const Backend = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", mb: 2, mt: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          Backend Projects
        </Typography>
      </Box>
      <BackendCards />
    </>
  );
};

export default Backend;
