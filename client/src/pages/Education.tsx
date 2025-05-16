import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import columbiaImg from "../assets/columbia.jpeg";
import cuLogo from "../assets/logos/CULogo.png";

const Education: React.FC = () => {
  return (
    <>
      <Box sx={{ py: 2 }}>
        <Box
          component="img"
          src={columbiaImg}
          alt="Education"
          sx={{
            width: "100%",
            height: 400,
            objectFit: "cover",
            objectPosition: "100% center",
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
              src={cuLogo}
              alt="Education"
              sx={{
                width: { xs: 100, sm: 150 },
                py: 2,
              }}
            />{" "}
            Columbia University in the City of New York
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

        <Box
          id="links"
          sx={{ backgroundColor: "#ebebeb", p: 4, borderRadius: 2, my: 6 }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ mx: 6, mb: 4 }}
          >
            {/* Relevant Coursework */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="h5"
                sx={{ mb: 2, textAlign: "center", color: "white" }}
              >
                Relevant Coursework
              </Typography>
              <List dense>
                <ListItem>
                  <Link
                    to="https://www.cs.columbia.edu/~jae/3157-2017-9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary="Advanced Programming" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="https://www.cs.columbia.edu/~bauer/cs3134-f15/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary="Data Structures" />
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Intro to Java Programming" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Computer Systems Fundamentals" />
                </ListItem>
              </List>
            </Grid>

            {/* Certifications */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
                Certifications
              </Typography>
              <List dense>
                <ListItem>
                  <Link
                    to="https://www.certmetrics.com/comptia/public/verification.aspx?code=27P6G4MCNGE1K4D0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary="CompTIA Security+" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="https://www.credly.com/badges/6a0dfddb-22bf-40d9-bb00-d5dbda2012f4?source=linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary="Docker Essentials: A Developer Introduction" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="https://www.hackerrank.com/certificates/0a02322d0772"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary="Rest API (Intermediate) Certificate" />
                  </Link>
                </ListItem>
              </List>
            </Grid>

            {/* Udemy */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
                Online Coursework
              </Typography>
              <List dense>
                <ListItem>
                  <Link
                    to="https://ude.my/UC-bc62adb9-9709-4089-939c-6c51152d8d9f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary="MERN Stack Front To Back: Full Stack React, Redux & Node.js" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="https://www.udemy.com/certificate/UC-f083f35c-32de-407b-b822-9436f46c3616/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary="Software Architecture Case Studies" />
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemText primary="The Complete Ruby on Rails Developer Course*" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Education;
