import React from "react";
import { Box, Typography } from "@mui/material";
import ExperienceCards from "../components/ExperenceCards";

interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Box className="title">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          Experience
        </Typography>
      </Box>
      <ExperienceCards />
    </Box>
  );
};

export default Skills;
