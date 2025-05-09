import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Card from "../components/Card";
import { getCards } from "../components/SkillCards";
import { CardItem } from "../interfaces/interfaces";
import "../css/SkillsPage.css";

const SkillsPage: React.FC = () => {
  const Cards = getCards();
  type CardCategory = keyof CardItem;

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Box className="title">
        <Typography variant="h2">Technical Skills</Typography>
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
    </Box>
  );
};

export default SkillsPage;
