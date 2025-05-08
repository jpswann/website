import { ReactNode } from "react";

export interface CardProps {
  header: string;
  icon: ReactNode;
  subtitle: string;
  desc: string;
  buttonText: string;
}

export interface CardItem {
  frameworks: CardProps[];
  languages: CardProps[];
  libraries: CardProps[];
  platforms: CardProps[];
  devops: CardProps[];
  databases: CardProps[];
  apis: CardProps[];
  cloud: CardProps[];
  testing: CardProps[];
}
