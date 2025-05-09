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
        icon: <FontAwesomeIcon icon={faJs} style={{ fontSize: "8rem" }} />,
        subtitle: "JavaScript",
        desc: "",
        buttonText: "",
      },
      {
        header: "Programing",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        icon: <FontAwesomeIcon icon={faPython} style={{ fontSize: "8rem" }} />,
        subtitle: "Python",
        desc: "",
        buttonText: "",
      },
      {
        header: "Programing",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "8rem" }} />,
        subtitle: "Java",
        desc: "",
        buttonText: "",
      },
      {
        header: "Programing",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        icon: <FontAwesomeIcon icon={faHtml5} style={{ fontSize: "8rem" }} />,
        subtitle: "HTML",
        desc: "",
        buttonText: "",
      },
      {
        header: "Style Sheet",
        icon: <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: "8rem" }} />,
        subtitle: "CSS",
        desc: "",
        buttonText: "",
      },
      {
        header: "Style Sheet",
        icon: <FontAwesomeIcon icon={faSass} style={{ fontSize: "8rem" }} />,
        subtitle: "SASS",
        desc: "",
        buttonText: "",
      },
      {
        header: "Query",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        icon: <FontAwesomeIcon icon={faNode} style={{ fontSize: "8rem" }} />,
        subtitle: "Node.Js",
        desc: "",
        buttonText: "",
      },
      {
        header: "Runtime",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "8rem" }} />,
        subtitle: "JRE/JDK",
        desc: "",
        buttonText: "",
      },
      {
        header: "Engine",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
    ],
    frameworks: [
      {
        header: "Framework",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "Framework",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "Framework",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "Framework",
        icon: <FontAwesomeIcon icon={faJava} style={{ fontSize: "8rem" }} />,
        subtitle: "Spring Boot",
        desc: "",
        buttonText: "",
      },
    ],
    devops: [
      {
        header: "GitHub",
        icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: "8rem" }} />,
        subtitle: "Version Control",
        desc: "",
        buttonText: "",
      },
      {
        header: "GitHub Actions",
        icon: <FontAwesomeIcon icon={faGit} style={{ fontSize: "8rem" }} />,
        subtitle: "CI/CD Automation",
        desc: "",
        buttonText: "",
      },
      {
        header: "Docker",
        icon: <FontAwesomeIcon icon={faDocker} style={{ fontSize: "8rem" }} />,
        subtitle: "Containerization",
        desc: "",
        buttonText: "",
      },
      {
        header: "Container Orchestration",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Kubernetes
          </Typography>
        ),
        subtitle: "Container Orchestration",
        desc: "",
        buttonText: "",
      },
      {
        header: "IaC Tool",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
    ],
    libraries: [
      {
        header: "Library",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "8rem" }} />,
        subtitle: "React",
        desc: "",
        buttonText: "",
      },
      {
        header: "State Management",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "8rem" }} />,
        subtitle: "Redux",
        desc: "",
        buttonText: "",
      },
      {
        header: "Client-side Routing",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "8rem" }} />,
        subtitle: "React Router",
        desc: "",
        buttonText: "",
      },
      {
        header: "HTTP Client",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "Auth Middleware",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "Password Hashing",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "Variable Management",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            dotenv
          </Typography>
        ),
        subtitle: "bcrypt",
        desc: "",
        buttonText: "",
      },
      {
        header: "Linting Tool",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "Code Formatter",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
        header: "UI Component",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            MUI
          </Typography>
        ),
        subtitle: "Material UI",
        desc: "",
        buttonText: "",
      },
      {
        header: "UI/UX",
        icon: (
          <FontAwesomeIcon icon={faBootstrap} style={{ fontSize: "8rem" }} />
        ),
        subtitle: "Bootstrap",
        desc: "",
        buttonText: "",
      },
    ],
    databases: [
      {
        header: "Databases",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
    apis: [
      {
        header: "API Development",
        icon: (
          <FontAwesomeIcon icon={faCloudsmith} style={{ fontSize: "8rem" }} />
        ),
        subtitle: "RESTful API",
        desc: "",
        buttonText: "",
      },
    ],
    cloud: [
      {
        header: "AWS",
        icon: <FontAwesomeIcon icon={faAws} style={{ fontSize: "8rem" }} />,
        subtitle: "Amazon Web Services",
        desc: "",
        buttonText: "",
      },
      {
        header: "IBM Cloud",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
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
    testing: [
      {
        header: "Postman",
        icon: (
          <FontAwesomeIcon
            icon={faTelegramPlane}
            style={{ fontSize: "8rem" }}
          />
        ),
        subtitle: "API Testing",
        desc: "",
        buttonText: "",
      },
      {
        header: "Jest",
        icon: (
          <Typography
            variant="h3"
            sx={{
              height: "8rem",
              width: "8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Jest
          </Typography>
        ),
        subtitle: "JavaScript Testing Framework",
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
    "apis",
    "cloud",
    "testing",
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Box className="title">
        <Typography variant="h2">Technical Skills</Typography>
      </Box>
      <Container>
        {categories.map((key) => (
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

export default SkillCards;
