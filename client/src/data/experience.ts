import { ExperenceCardProps } from "../interfaces/interfaces";
import bee from "../assets/logos/bee.svg";
import jri from "../assets/logos/jri.jpeg";
import iab from "../assets/logos/iab.png";
import ldeo from "../assets/logos/ldeo.png";
import navy from "../assets/logos/navy.png";

export const cards: ExperenceCardProps[] = [
  {
    icon: bee,
    alt: "IBM",
    title: "Application Developer: IBM Cloud Microservices at IBM",
    date: "Jan 2019 – Apr 2024",
    body: "As a Full Stack Developer at IBM, I led the design and development of internal and client-facing web applications for data management and external learning services within the IBM Cloud Toolchain. I was the sole developer behind a data management system used daily by over 170 users, built with React, Node.js, and Express. I managed database architecture for scalability and security, implemented CI/CD pipelines with GitHub, and deployed with Docker. I also created over 200 reusable UI components, coached junior developers, and ensured data integrity through rigorous testing and adherence to best practices.",
  },
  {
    icon: jri,
    alt: "Jri. America Inc.",
    title: "Java Applications Development at Jri. America Inc.",
    date: "Jul 2017 – Jan 2019",
    body: "At JRI-America Inc., I worked as a Software Developer on client-facing web applications and services, playing a key role in a large-scale cash management system that required frequent client communication. I built proprietary software for internal banking operations, supporting functions from portfolio management to compliance. I contributed in an Agile environment, focusing on writing clean, scalable Java code aligned with enterprise development standards.",
  },
  {
    icon: iab,
    alt: "International Advertising Bureau",
    title: "International Advertising Bureau",
    date: "Summer 2016",
    body: "IT Support Center Technician/Software Engineer Intern.",
  },
  {
    icon: ldeo,
    alt: "Lamont-Doherty Earth Observatory",
    title: "Lamont-Doherty Earth Observatory",
    date: "Oct 2014 - Mar 2015",
    body: "Biology/Paleo Environment Project Assistant.",
  },
  {
    icon: navy,
    alt: "United States Navy",
    title: "Information System Technician at United States Navy",
    date: "Jan 2009 – Jan 2013",
    body: "In the U.S. Navy, I served as an Information Systems Technician with Patrol Squadron 26 (VP-26), managing and securing network file share permissions in full compliance with Department of Defense cybersecurity standards. As the squadron’s Information Assurance Manager, I maintained secure communications and IT infrastructure, supporting global operations and mission-critical systems for the P-3 Orion aircraft during deployments.",
  },
];
