import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Contact from "../components/Contact";
import profilePic from "../assets/profile.jpg";

const About: React.FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
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
            variant="h5"
            sx={{ mt: 2, color: "rgba(130, 130, 130, 0.7) !important" }}
          >
            Bridging Military Precision and Technical Expertise
          </Typography>
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
            Hi, my name is Jason Swann. I'm a U.S. Navy veteran with a strong
            foundation in discipline, problem-solving, and high-pressure
            operations. After completing my service, I earned my degree from
            Columbia University, where I deepened my understanding of computer
            science and technology. Since then, I’ve built a career as a
            software developer, specializing in building scalable, efficient
            applications across a variety of platforms. With hands-on experience
            in both front-end and back-end development, I bring a mission-driven
            mindset to every project, always striving to deliver clean,
            maintainable code and innovative solutions.
            <br />
            <br />
            Outside of work, I stay connected to my roots by volunteering at my
            local American Legion, where I support fellow veterans and help
            organize community events. Giving back to the veteran community is
            an important part of my life and values. In my free time, I enjoy
            being outdoors—whether I’m playing a round of disc golf, hiking
            local trails, or experimenting with new hot sauce recipes in my
            kitchen. These hobbies keep me grounded, creative, and constantly
            learning in and out of the tech world.
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
          src={profilePic}
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
  );
};

export default About;
