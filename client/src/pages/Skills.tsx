import React from "react";
import SkillCards from "../components/SkillCards";
import { Box, Typography } from "@mui/material";

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
          Technical Skills
        </Typography>
      </Box>
      <SkillCards />
    </Box>
  );
};

export default Skills;
