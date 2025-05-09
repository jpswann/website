import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SkillCardProps } from "../interfaces/interfaces";
import { Card, Box } from "@mui/material";

const BasicCard: React.FC<SkillCardProps> = ({
  header,
  icon,
  subtitle,
  desc,
  buttonText,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {header}
          </Typography>
          <Typography variant="h5" component="div">
            {icon}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {subtitle}
          </Typography>
          <Typography variant="body2">{desc}</Typography>
        </Box>
      </CardContent>
      {buttonText && (
        <CardActions sx={{ justifyContent: "center" }}>
          <Button size="small">{buttonText}</Button>
        </CardActions>
      )}
    </Card>
  );
};

export default BasicCard;
