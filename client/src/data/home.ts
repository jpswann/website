import { HomeCardProps } from "../interfaces/interfaces";

export const cards: HomeCardProps[] = [
  {
    title: "Frontend Development",
    text: "React, TypeScript, SCSS, MUI, and responsive UI/UX best practices.",
    link: "/frontend",
  },
  {
    title: "Backend Development",
    text: "Node.js, Express, RESTful APIs, and microservice architecture.",
    link: "/backend",
  },
  {
    title: "Database Design",
    text: "MySQL, PostgreSQL, MongoDB, and optimized schema design for scalability.",
    link: "/dbdesign",
  },
  {
    title: "DevOps & Deployment",
    text: "Docker, GitHub Actions, and cloud hosting with IBM or AWS.",
    link: "/devops",
  },
  {
    title: "Security & Best Practices",
    text: "Authentication, OWASP, HTTPS, JWT, and secure coding practices.",
    link: "/security",
  },
  {
    title: "Testing & QA",
    text: "Unit, integration, E2E tests, and code reviews for reliability and safety.",
    link: "/qa",
  },
];
