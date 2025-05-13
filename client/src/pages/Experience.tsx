import React from "react";
import { Box, Typography } from "@mui/material";
import ExperienceCards from "../components/ExperenceCards";

interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Box className="title">
        <Typography variant="h2">Experience</Typography>
      </Box>
      <ExperienceCards />
    </Box>
  );
};

export default Skills;
