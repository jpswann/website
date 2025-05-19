import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

interface ActionAreaCardProps {
  img: string;
  alt: string;
  title: string;
  body: string;
  link: string;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({
  img,
  alt,
  title,
  body,
  link,
}) => {
  const isExternal = /^https?:\/\//i.test(link);

  const content = (
    <CardActionArea>
      <CardMedia component="img" height="300" image={img} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {body}
        </Typography>
      </CardContent>
    </CardActionArea>
  );

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 300, xl: 350 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isExternal ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          {content}
        </a>
      ) : (
        <Link
          to={link}
          style={{ textDecoration: "none" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {content}
        </Link>
      )}
    </Card>
  );
};

export default ActionAreaCard;
