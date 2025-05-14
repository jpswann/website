import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Card from "./SkillCard";
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "../css/SkillsPage.css";

library.add(fab);

const SkillCards: React.FC = () => {
  const Cards: SkillCardItem = {
    languages: [
      {
        icon: (
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{ fontSize: "5rem" }}
          />
        ),
        subtitle: "JavaScript",
      },
      {
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
      },
      {
        icon: <FontAwesomeIcon icon={faPython} style={{ fontSize: "5rem" }} />,
        subtitle: "Python",
      },
      {
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "Java",
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        icon: <FontAwesomeIcon icon={faHtml5} style={{ fontSize: "5rem" }} />,
        subtitle: "HTML",
      },
      {
        icon: <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: "5rem" }} />,
        subtitle: "CSS",
      },
      {
        icon: <FontAwesomeIcon icon={faSass} style={{ fontSize: "5rem" }} />,
        subtitle: "SASS",
      },
      {
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
      },
      {
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
      },
    ],
    platforms: [
      {
        icon: <FontAwesomeIcon icon={faNode} style={{ fontSize: "5rem" }} />,
        subtitle: "Node.Js",
      },
      {
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "JRE/JDK",
      },
      {
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
      },
      {
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
      },
      {
        icon: <FontAwesomeIcon icon={faAws} style={{ fontSize: "5rem" }} />,
        subtitle: "AWS",
      },
      {
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
      },
    ],
    frameworks: [
      {
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
      },
      {
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
      },
      {
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
      },
      {
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "Spring Boot",
      },
      {
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
      },
      {
        icon: (
          <FontAwesomeIcon icon={faCloudsmith} style={{ fontSize: "5rem" }} />
        ),
        subtitle: "RESTful API",
      },
    ],
    devops: [
      {
        icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: "5rem" }} />,
        subtitle: "GitHub",
      },
      {
        icon: <FontAwesomeIcon icon={faGit} style={{ fontSize: "5rem" }} />,
        subtitle: "GitHub Actions",
      },
      {
        icon: <FontAwesomeIcon icon={faDocker} style={{ fontSize: "5rem" }} />,
        subtitle: "Docker",
      },
      {
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
      },
      {
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
      },
      {
        icon: (
          <FontAwesomeIcon
            icon={faTelegramPlane}
            style={{ fontSize: "5rem" }}
          />
        ),
        subtitle: "Postman",
      },
    ],
    libraries: [
      {
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "React",
      },
      {
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "Redux",
      },
      {
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "React Router",
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        icon: (
          <FontAwesomeIcon icon={faBootstrap} style={{ fontSize: "5rem" }} />
        ),
        subtitle: "Bootstrap",
      },
    ],
    databases: [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
    <Container>
      {categories.map((key) => (
        <React.Fragment key={key}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Typography>
          <Grid container spacing={2} sx={{ mb: 5 }}>
            {Cards[key].map((card, i) => (
              <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }} key={i}>
                <Card icon={card.icon} subtitle={card.subtitle} />
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default SkillCards;
