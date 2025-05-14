import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { ExperenceCardProps } from "../interfaces/interfaces";

const ExperienceCards: React.FC = () => {
  const cards: ExperenceCardProps[] = [
    {
      icon: "/src/assets/bee.svg",
      alt: "IBM",
      title: "Application Developer: IBM Cloud Microservices at IBM",
      date: "Jan 2019 – Apr 2024",
      body: "As a Full Stack Developer at IBM, I led the design and development of internal and client-facing web applications for data management and external learning services within the IBM Cloud Toolchain. I was the sole developer behind a data management system used daily by over 170 users, built with React, Node.js, and Express. I managed database architecture for scalability and security, implemented CI/CD pipelines with GitHub, and deployed with Docker. I also created over 200 reusable UI components, coached junior developers, and ensured data integrity through rigorous testing and adherence to best practices.",
    },
    {
      icon: "/src/assets/jri.jpeg",
      alt: "Jri. America Inc.",
      title: "Java Applications Development at Jri. America Inc.",
      date: "Jul 2017 – Jan 2019",
      body: "At JRI-America Inc., I worked as a Software Developer on client-facing web applications and services, playing a key role in a large-scale cash management system that required frequent client communication. I built proprietary software for internal banking operations, supporting functions from portfolio management to compliance. I contributed in an Agile environment, focusing on writing clean, scalable Java code aligned with enterprise development standards.",
    },
    {
      icon: "/src/assets/iab.png",
      alt: "International Advertising Bureau",
      title: "International Advertising Bureau",
      date: "Summer 2016",
      body: "IT Support Center Technician/Software Engineer Intern.",
    },
    {
      icon: "/src/assets/ldeo.png",
      alt: "Lamont-Doherty Earth Observatory",
      title: "Lamont-Doherty Earth Observatory",
      date: "Oct 2014 - Mar 2015",
      body: "Biology/Paleo Environment Project Assistant.",
    },
    {
      icon: "/src/assets/navy.png",
      alt: "United States Navy",
      title: "Information System Technician at United States Navy",
      date: "Jan 2009 – Jan 2013",
      body: "In the U.S. Navy, I served as an Information Systems Technician with Patrol Squadron 26 (VP-26), managing and securing network file share permissions in full compliance with Department of Defense cybersecurity standards. As the squadron’s Information Assurance Manager, I maintained secure communications and IT infrastructure, supporting global operations and mission-critical systems for the P-3 Orion aircraft during deployments.",
    },
  ];
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
              {/* Left: Icon and Title */}
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
