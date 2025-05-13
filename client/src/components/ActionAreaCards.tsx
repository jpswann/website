import { Grid } from "@mui/material";
import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import { ActionAreaCardProps } from "../interfaces/interfaces";

interface Props {}

const ActionAreaCards: React.FC<Props> = ({}) => {
  const cards: ActionAreaCardProps[] = [
    {
      img: "/profile2.jpg",
      alt: "About",
      title: "About",
      body: "Learn more about my background, development journey, and what drives me as a developer.",
      link: "/about",
    },
    {
      img: "/profile2.jpg",
      alt: "Skills",
      title: "Skills",
      body: "Explore the tools, technologies, and frameworks I use to build fast, responsive, and scalable web applications.",
      link: "/skills",
    },
    {
      img: "/profile2.jpg",
      alt: "Experience",
      title: "Experience",
      body: "A quick look at my professional journey—projects, roles, and the impact I’ve made as a developer across teams and tech stacks.",
      link: "/experience",
    },
    {
      img: "/profile2.jpg",
      alt: "Education",
      title: "Education",
      body: "Explore my academic background, including degrees, certifications, and the institutions that shaped my foundation in software development.",
      link: "/education",
    },
  ];
  return (
    <Grid
      container
      justifyContent="center"
      gap={4}
      size={{ xs: 12, sm: 6, md: 3 }}
    >
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
