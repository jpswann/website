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
  return (
    <Card
      sx={{ width: 345, height: 450, display: "flex", flexDirection: "column" }}
    >
      <Link to={link} style={{ textDecoration: "none" }}>
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
      </Link>
    </Card>
  );
};

export default ActionAreaCard;
