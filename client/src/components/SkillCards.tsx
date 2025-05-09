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
        header: "Programing",
        icon: <FontAwesomeIcon icon={faJs} style={{ fontSize: "5rem" }} />,
        subtitle: "JavaScript",
        desc: "",
        buttonText: "",
      },
      {
        header: "Programing",
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
        header: "Programing",
        icon: <FontAwesomeIcon icon={faPython} style={{ fontSize: "5rem" }} />,
        subtitle: "Python",
        desc: "",
        buttonText: "",
      },
      {
        header: "Programing",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "Java",
        desc: "",
        buttonText: "",
      },
      {
        header: "Programing",
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
        header: "Programing",
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
        header: "Programing",
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
        header: "Markup",
        icon: <FontAwesomeIcon icon={faHtml5} style={{ fontSize: "5rem" }} />,
        subtitle: "HTML",
        desc: "",
        buttonText: "",
      },
      {
        header: "Style Sheet",
        icon: <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: "5rem" }} />,
        subtitle: "CSS",
        desc: "",
        buttonText: "",
      },
      {
        header: "Style Sheet",
        icon: <FontAwesomeIcon icon={faSass} style={{ fontSize: "5rem" }} />,
        subtitle: "SASS",
        desc: "",
        buttonText: "",
      },
      {
        header: "Query",
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
        header: "Scripting",
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
        header: "Runtime",
        icon: <FontAwesomeIcon icon={faNode} style={{ fontSize: "5rem" }} />,
        subtitle: "Node.Js",
        desc: "",
        buttonText: "",
      },
      {
        header: "Runtime",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "JRE/JDK",
        desc: "",
        buttonText: "",
      },
      {
        header: "Engine",
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
        header: "Engine",
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
        header: "AWS",
        icon: <FontAwesomeIcon icon={faAws} style={{ fontSize: "5rem" }} />,
        subtitle: "Amazon Web Services",
        desc: "",
        buttonText: "",
      },
      {
        header: "IBM Cloud",
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
        header: "Express.Js",
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
        subtitle: "Framework",
        desc: "",
        buttonText: "",
      },
      {
        header: "NestJS",
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
        subtitle: "Framework",
        desc: "",
        buttonText: "",
      },
      {
        header: "Ruby on Rails",
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
        subtitle: "Framework",
        desc: "",
        buttonText: "",
      },
      {
        header: "Spring Boot",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "5rem" }} />,
        subtitle: "Framework",
        desc: "",
        buttonText: "",
      },
      {
        header: "Jest",
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
        subtitle: "Framework",
        desc: "",
        buttonText: "",
      },
      {
        header: "RESTful API",
        icon: (
          <FontAwesomeIcon icon={faCloudsmith} style={{ fontSize: "5rem" }} />
        ),
        subtitle: "API Development",
        desc: "",
        buttonText: "",
      },
    ],
    devops: [
      {
        header: "GitHub",
        icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: "5rem" }} />,
        subtitle: "Version Control",
        desc: "",
        buttonText: "",
      },
      {
        header: "GitHub Actions",
        icon: <FontAwesomeIcon icon={faGit} style={{ fontSize: "5rem" }} />,
        subtitle: "CI/CD Automation",
        desc: "",
        buttonText: "",
      },
      {
        header: "Docker",
        icon: <FontAwesomeIcon icon={faDocker} style={{ fontSize: "5rem" }} />,
        subtitle: "Containerization",
        desc: "",
        buttonText: "",
      },
      {
        header: "Kubernetes",
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
        subtitle: "Containerization",
        desc: "",
        buttonText: "",
      },
      {
        header: "Terraform",
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
        subtitle: "IaC Tool",
        desc: "",
        buttonText: "",
      },
      {
        header: "Postman",
        icon: (
          <FontAwesomeIcon
            icon={faTelegramPlane}
            style={{ fontSize: "5rem" }}
          />
        ),
        subtitle: "API Testing",
        desc: "",
        buttonText: "",
      },
    ],
    libraries: [
      {
        header: "React",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "Library",
        desc: "",
        buttonText: "",
      },
      {
        header: "Redux",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "State Management",
        desc: "",
        buttonText: "",
      },
      {
        header: "React Router",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "5rem" }} />,
        subtitle: "Client-side Routing",
        desc: "",
        buttonText: "",
      },
      {
        header: "Axios",
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
        subtitle: "HTTP Client",
        desc: "",
        buttonText: "",
      },
      {
        header: "Passport.js",
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
        subtitle: "Auth Middleware",
        desc: "",
        buttonText: "",
      },
      {
        header: "bcrypt",
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
        subtitle: "Password Hashing",
        desc: "",
        buttonText: "",
      },
      {
        header: "dotenv",
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
        subtitle: "Var Management",
        desc: "",
        buttonText: "",
      },
      {
        header: "ESLint",
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
        subtitle: "Linting Tool",
        desc: "",
        buttonText: "",
      },
      {
        header: "Prettier",
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
        subtitle: "Code Formatter",
        desc: "",
        buttonText: "",
      },
      {
        header: "Material UI",
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
        subtitle: "UI Component",
        desc: "",
        buttonText: "",
      },
      {
        header: "Bootstrap",
        icon: (
          <FontAwesomeIcon icon={faBootstrap} style={{ fontSize: "5rem" }} />
        ),
        subtitle: "UI/UX",
        desc: "",
        buttonText: "",
      },
    ],
    databases: [
      {
        header: "Databases",
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
        subtitle: "NoSQL Databases",
        desc: "",
        buttonText: "",
      },
      {
        header: "Databases",
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
        header: "Databases",
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
        header: "Databases",
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
