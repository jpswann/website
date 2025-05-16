import { Card, CardContent, Grid, Typography } from "@mui/material";
import { cards } from "../data/home";

const HomeCards: React.FC = () => {
  return (
    <Grid
      container
      maxWidth="lg"
      spacing={2}
      sx={{ mt: 6, mb: 6 }}
      justifyContent="center"
      textAlign="center"
      justifySelf="center"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
            maxWidth: 345,
            minHeight: 100,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default HomeCards;
