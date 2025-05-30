import { ActionAreaCardProps } from "../interfaces/interfaces";
import aboutImg from "../assets/actionCards/about.jpg";
import skillsImg from "../assets/actionCards/skills.jpg";
import experienceImg from "../assets/actionCards/experience.jpg";
import educationImg from "../assets/actionCards/education.jpg";

export const cards: ActionAreaCardProps[] = [
  {
    img: aboutImg,
    alt: "About",
    title: "About",
    body: "Learn more about my background, development journey, and what drives me as a developer.",
    link: "/about",
  },
  {
    img: skillsImg,
    alt: "Skills",
    title: "Skills",
    body: "Explore the tools, technologies, and frameworks I use to build fast, responsive, and scalable web applications.",
    link: "/skills",
  },
  {
    img: experienceImg,
    alt: "Experience",
    title: "Experience",
    body: "A quick look at my professional journey—projects, roles, and the impact I’ve made as a developer across teams and tech stacks.",
    link: "/experience",
  },
  {
    img: educationImg,
    alt: "Education",
    title: "Education",
    body: "Explore my academic background, including degrees, certifications, and the institutions that shaped my foundation in software development.",
    link: "/education",
  },
];
