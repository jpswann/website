import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Card from "../components/Card";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { getCards } from "../components/SkillCards";
import { CardItem } from "../interfaces/interfaces";

const WelcomePage: React.FC = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const Cards = getCards();
  type CardCategory = keyof CardItem;
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
          <Typography variant="h2">Technicial Skills</Typography>
        </ThemeProvider>
      </Box>
      <Container>
        {(Object.keys(Cards) as CardCategory[]).map((key) => (
          <React.Fragment key={key}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Typography>
            <Grid container spacing={3} sx={{ mb: 5 }}>
              {Cards[key].map((card, i) => (
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
          </React.Fragment>
        ))}
      </Container>
    </>
  );
};

export default WelcomePage;
