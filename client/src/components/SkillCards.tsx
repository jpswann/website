import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Card from "./Card";
import { SkillCardItem } from "../interfaces/interfaces";
import {
  faAws,
  faBootstrap,
  faCloudsmith,
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faPython,
  faReact,
  faSass,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/SkillsPage.css";

const SkillCards: React.FC = () => {
  const Cards: SkillCardItem = {
    languages: [
      {
        header: "",
        icon: <FontAwesomeIcon icon={faJs} style={{ fontSize: "5rem" }} />,
        subtitle: "JavaScript",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            TS
          </Typography>
        ),
        subtitle: "TypeScript",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faPython} style={{ fontSize: "5rem" }} />,
        subtitle: "Python",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "Java",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Ruby
          </Typography>
        ),
        subtitle: "Ruby",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            C++
          </Typography>
        ),
        subtitle: "C++",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            C#
          </Typography>
        ),
        subtitle: "C#",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faHtml5} style={{ fontSize: "5rem" }} />,
        subtitle: "HTML",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: "5rem" }} />,
        subtitle: "CSS",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faSass} style={{ fontSize: "5rem" }} />,
        subtitle: "SASS",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            SQL
          </Typography>
        ),
        subtitle: "SQL",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Bash/Shell
          </Typography>
        ),
        subtitle: "Bash/Shell Script",
        desc: "",
        buttonText: "",
      },
    ],
    platforms: [
      {
        header: "",
        icon: <FontAwesomeIcon icon={faNode} style={{ fontSize: "5rem" }} />,
        subtitle: "Node.Js",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "JRE/JDK",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            V8
          </Typography>
        ),
        subtitle: "V8",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Nginx
          </Typography>
        ),
        subtitle: "Nginx",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faAws} style={{ fontSize: "5rem" }} />,
        subtitle: "AWS",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            IBM Cloud
          </Typography>
        ),
        subtitle: "IBM Cloud",
        desc: "",
        buttonText: "",
      },
    ],
    frameworks: [
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ex
          </Typography>
        ),
        subtitle: "Express.Js",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            NestJS
          </Typography>
        ),
        subtitle: "NestJS",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Rails
          </Typography>
        ),
        subtitle: "Ruby on Rails",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "Spring Boot",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Jest
          </Typography>
        ),
        subtitle: "Jest",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <FontAwesomeIcon icon={faCloudsmith} style={{ fontSize: "5rem" }} />
        ),
        subtitle: "RESTful API",
        desc: "",
        buttonText: "",
      },
    ],
    devops: [
      {
        header: "",
        icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: "5rem" }} />,
        subtitle: "GitHub",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faGit} style={{ fontSize: "5rem" }} />,
        subtitle: "GitHub Actions",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faDocker} style={{ fontSize: "5rem" }} />,
        subtitle: "Docker",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Kubernetes
          </Typography>
        ),
        subtitle: "Kubernetes",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Terraform
          </Typography>
        ),
        subtitle: "Terraform",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <FontAwesomeIcon
            icon={faTelegramPlane}
            style={{ fontSize: "5rem" }}
          />
        ),
        subtitle: "Postman",
        desc: "",
        buttonText: "",
      },
    ],
    libraries: [
      {
        header: "",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "React",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "Redux",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "React Router",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Axios
          </Typography>
        ),
        subtitle: "Axios",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Passport.js
          </Typography>
        ),
        subtitle: "Passport.js",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            bcrypt
          </Typography>
        ),
        subtitle: "bcrypt",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            dotenv
          </Typography>
        ),
        subtitle: "dotenv",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ESLint
          </Typography>
        ),
        subtitle: "ESLint",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Prettier
          </Typography>
        ),
        subtitle: "Prettier",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            MUI
          </Typography>
        ),
        subtitle: "MUI",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <FontAwesomeIcon icon={faBootstrap} style={{ fontSize: "5rem" }} />
        ),
        subtitle: "Bootstrap",
        desc: "",
        buttonText: "",
      },
    ],
    databases: [
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            NoSQL
          </Typography>
        ),
        subtitle: "NoSQL",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            MongoDB
          </Typography>
        ),
        subtitle: "MongoDB",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            DB2
          </Typography>
        ),
        subtitle: "DB2",
        desc: "",
        buttonText: "",
      },
      {
        header: "",
        icon: (
          <Typography
            variant="h5"
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            PostgreSQL
          </Typography>
        ),
        subtitle: "PostgreSQL",
        desc: "",
        buttonText: "",
      },
    ],
  };
  type SkillCardCategory = keyof SkillCardItem;

  const categories: SkillCardCategory[] = [
    "languages",
    "platforms",
    "frameworks",
    "devops",
    "libraries",
    "databases",
  ];

  return (
    <Box sx={{ py: 2 }}>
      <Box className="title">
        <Typography variant="h2">Technical Skills</Typography>
      </Box>
      <Container>
        {categories.map((key) => (
          <React.Fragment key={key}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Typography>
            <Grid container spacing={2} sx={{ mb: 5 }}>
              {Cards[key].map((card, i) => (
                <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }} key={i}>
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

export default SkillCards;
