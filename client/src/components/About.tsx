import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Contact from "./Contact";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            px: { xs: 2, sm: 4 },
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h2"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              About
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Hello! I’m Jason, a full stack developer with a passion for
              building elegant, scalable web applications. I specialize in
              React, Node.js, and modern cloud infrastructure, and I love
              transforming ideas into clean, performant user experiences.
              <br />
              <br />
              In my free time, I enjoy mentoring junior developers,
              experimenting with new technologies, and spending time outdoors.
              Let’s build something great together.
            </Typography>
          </Box>
          <Contact />
        </Grid>

        {/* Image on Right */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src="/profile.jpg"
            alt="JPSwann"
            sx={{
              width: { xs: "200px", sm: "100%", md: "100%" },
              height: { xs: "300px", sm: "100%", md: "100%" },
              borderRadius: "4px",
              objectFit: "cover",
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
