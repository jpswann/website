import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface SkillCardProps {
  icon?: IconName;
  subtitle: string;
  text?: string;
}

export interface ExperenceCardProps {
  icon: string;
  alt: string;
  title: string;
  date: string;
  body: string;
}

export interface HomeCardProps {
  title: string;
  text: string;
  link?: string;
}

export interface ActionAreaCardProps {
  img: string;
  alt: string;
  title: string;
  body: string;
  link: string;
}
