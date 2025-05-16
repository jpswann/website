import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { cards } from "../data/experience";

const ExperienceCards: React.FC = () => {
  return (
    <Grid spacing={2} sx={{ mt: 6 }} justifyItems="center">
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%" },
            minHeight: 177,
            height: { xs: "auto" },
            display: "flex",
            flexDirection: "column",
            mb: 6,
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              sx={{ mb: 2 }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.alt}
                  sx={{ width: 40, height: 40, objectFit: "contain" }}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    alignItems: "center",
                    mt: 1,
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.5rem",
                    },
                  }}
                >
                  {card.title}
                </Typography>
              </Box>

              {/* Right: Date */}
              <Typography
                variant="body2"
                sx={{
                  mt: { xs: 1, sm: 0 },
                  ml: { xs: 0, sm: 2 },
                  whiteSpace: "nowrap",
                  alignSelf: { xs: "flex-start", sm: "normal" },
                }}
              >
                {card.date}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                },
              }}
            >
              {card.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ExperienceCards;
