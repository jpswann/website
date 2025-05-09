import { ReactNode } from "react";

export interface SkillCardProps {
  header: string;
  icon: ReactNode;
  subtitle: string;
  desc: string;
  buttonText: string;
}

export interface HomeCardProps {
  title: string;
  text: string;
}

export interface SkillCardItem {
  frameworks: SkillCardProps[];
  languages: SkillCardProps[];
  libraries: SkillCardProps[];
  platforms: SkillCardProps[];
  devops: SkillCardProps[];
  databases: SkillCardProps[];
}
