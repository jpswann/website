import { Box, Typography } from "@mui/material";
import Connect4Board from "../components/frontend/connect4/Board";

const Connect4 = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Box className="title">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          Connect 4
        </Typography>
      </Box>
      <Connect4Board />
    </Box>
  );
};

export default Connect4;
