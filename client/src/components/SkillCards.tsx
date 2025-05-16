import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Card from "./SkillCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { skills } from "../data/skills";
import "../css/SkillsPage.css";

library.add(fab);

const SkillCards: React.FC = () => {
  return (
    <Container>
      {Object.entries(skills).map(([type, cards]) =>
        type === "top 5" ? (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography>
            <Box
              key={type}
              sx={{
                backgroundColor: "#333333",
                p: 4,
                borderRadius: 2,
                mb: 5,
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                {cards.map((card, i) => (
                  <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }} key={i}>
                    <Card
                      icon={card.icon}
                      subtitle={card.subtitle}
                      text={card.text}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        ) : (
          <React.Fragment key={type}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography>
            <Grid container spacing={2} sx={{ mb: 5 }}>
              {cards.map((card, i) => (
                <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }} key={i}>
                  <Card
                    icon={card.icon}
                    subtitle={card.subtitle}
                    text={card.text}
                  />
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        )
      )}
    </Container>
  );
};

export default SkillCards;
