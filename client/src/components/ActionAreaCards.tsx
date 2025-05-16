import { Grid } from "@mui/material";
import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import { cards } from "../data/actionarea";

const ActionAreaCards: React.FC = () => {
  return (
    <Grid container justifyContent="center" gap={4}>
      {cards.map((card, idx) => (
        <ActionAreaCard
          key={idx}
          img={card.img}
          alt={card.alt}
          title={card.title}
          body={card.body}
          link={card.link}
        />
      ))}
    </Grid>
  );
};

export default ActionAreaCards;
