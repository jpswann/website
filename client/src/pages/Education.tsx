import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ExperienceCards from "../components/ExperenceCards";

interface Props {}

const Education: React.FC<Props> = () => {
  return (
    <>
      <Box sx={{ py: 2 }}>
        <Box
          component="img"
          src="/columbia.jpg"
          alt="Education"
          sx={{
            width: "100%",
            height: 400,
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 2,
            boxShadow: 3,
            mb: 2,
          }}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              fontSize: { xs: "1.5rem", md: "3rem" },
            }}
          >
            <Box
              component="img"
              src="/CULogo.png"
              alt="Education"
              sx={{
                width: { xs: 100, sm: 150 },
                py: 2,
              }}
            />{" "}
            Columbia Univery in the City of New York
          </Typography>
        </Box>
        <Box sx={{ mx: 6, mb: 2 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
              },
            }}
          >
            At Columbia University in New York (January 2013 – May 2017), I
            earned a Bachelor of Arts in Earth Science with a Minor in Computer
            Science. My studies included advanced programming, data structures,
            Big Data with Python, and courses in computer science and Java,
            along with the fundamentals of computer systems. This diverse
            academic background provided me with a strong interdisciplinary
            foundation in analytical thinking and technical problem-solving,
            skills that continue to drive my work today.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Education;
