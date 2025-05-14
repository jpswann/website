import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Contact from "../components/Contact";

const About: React.FC = () => {
  return (
    <Box sx={{ py: 2 }}>
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
          <Typography
            variant="h2"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            About
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                },
              }}
            >
              <br />
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
          </Typography>
          <Contact />
        </Grid>

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
            src="/src/assets/profile.jpg"
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
