import { Box, Button, Grid, Typography } from "@mui/material";
import HomeCards from "../components/HomeCards";
import ActionAreaCard from "../components/ActionAreaCard";

const HomePage = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography variant="h2" component="h1">
          Welcome to My Developer Portfolio
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Building clean, scalable, and modern applications with React, Node.js,
          and more.
        </Typography>
        <br />
        <Button
          variant="contained"
          className="button"
          href="https://github.com/jpswann"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Projects
        </Button>

        <HomeCards />
      </Box>
      <Box sx={{ marginLeft: "1.4rem", marginTop: "2rem" }}>
        <Grid
          container
          spacing={13}
          sx={{ columnGap: 0 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ActionAreaCard
              img="/profile2.jpg"
              alt="About"
              title="About"
              body="Learn more about my background, development journey, and what drives me as a developer."
              link="/about"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ActionAreaCard
              img="/profile.jpg"
              alt="Skills"
              title="Skills"
              body="Explore the tools, technologies, and frameworks I use to build fast, responsive, and scalable web applications."
              link="/about"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ActionAreaCard
              img="/profile.jpg"
              alt="JPSwann"
              title="Experience"
              body="A quick look at my professional journey—projects, roles, and the impact I’ve made as a developer across teams and tech stacks."
              link="/experience"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ActionAreaCard
              img="/profile.jpg"
              alt="JPSwann"
              title="Education"
              body="Explore my academic background, including degrees, certifications, and the institutions that shaped my foundation in software development."
              link="/education"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
