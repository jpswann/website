import React, { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import Card from "./SkillCard";
import { SkillCardProps } from "../interfaces/interfaces";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "../css/SkillsPage.css";
import { useLoading } from "../helpers/LoadingContext";

library.add(fab);

type GroupedSkills = {
  [key: string]: SkillCardProps[];
};

const SkillCards: React.FC = () => {
  const [groupedSkills, setGroupedSkills] = useState<GroupedSkills>({});
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchSkills = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get("/api/skills");
        const data: SkillCardProps[] = await res.data;

        const grouped: GroupedSkills = data.reduce((acc, skill) => {
          if (!acc[skill.type]) acc[skill.type] = [];
          acc[skill.type].push(skill);
          return acc;
        }, {} as GroupedSkills);

        setGroupedSkills(grouped);
      } catch (err) {
        console.error("Failed to fetch skills:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSkills();
  }, [setIsLoading]);

  const TestLoader = () => {
    const { setIsLoading } = useLoading();

    return (
      <button
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 3000);
        }}
      >
        Test Loading
      </button>
    );
  };

  return (
    <Container>
      {Object.entries(groupedSkills).map(([type, cards]) => (
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
                  type={card.type}
                />
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default SkillCards;
