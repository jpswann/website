import { faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { ReactNode } from "react";

// Define the type of each object in the array
interface Item {
  header: string;
  icon: ReactNode;
  subtitle: string;
  desc: string;
  buttonText: string;
}

// Function that returns an array of objects
export const getCards = (): Item[] => {
  const items: Item[] = [
    {
      header: "Library",
      icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "8rem" }} />,
      subtitle: "React",
      desc: "",
      buttonText: "",
    },
    {
      header: "Runtime",
      icon: <FontAwesomeIcon icon={faNode} style={{ fontSize: "8rem" }} />,
      subtitle: "Node.Js",
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
          ex
        </Typography>
      ),
      subtitle: "Express.Js",
      desc: "",
      buttonText: "",
    },
    {
      header: "Language",
      icon: <FontAwesomeIcon icon={faJs} style={{ fontSize: "8rem" }} />,
      subtitle: "JavaScript",
      desc: "",
      buttonText: "",
    },
  ];

  return items;
};
