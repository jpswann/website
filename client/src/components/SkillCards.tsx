import {
  faCss3Alt,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { CardItem } from "../interfaces/interfaces";

export const getCards = (): CardItem => {
  const items: CardItem = {
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
    libraries: [
      {
        header: "Library",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "8rem" }} />,
        subtitle: "React",
        desc: "",
        buttonText: "",
      },
      {
        header: "Library",
        icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "8rem" }} />,
        subtitle: "Redux",
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
        header: "UI",
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
            Bootstrap
          </Typography>
        ),
        subtitle: "Bootstrap",
        desc: "",
        buttonText: "",
      },
    ],
  };

  return items;
};
