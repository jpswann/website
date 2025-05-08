import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Card from "../components/Card";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { getCards } from "../components/Cards";

const WelcomePage: React.FC = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const Cards = getCards();
  return (
    <>
      <Box
        className="welcome-title"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "30vh",
          textAlign: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h2">My Skills</Typography>
        </ThemeProvider>
      </Box>
      <Container>
        <Typography variant="h4">Languages</Typography>
        <br />
        <Grid container spacing={3}>
          {Cards.map((card, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Card
                header={card.header}
                icon={card.icon}
                subtitle={card.subtitle}
                desc={card.desc}
                buttonText={card.buttonText}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default WelcomePage;
