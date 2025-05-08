import { ReactNode } from "react";

export interface CardProps {
  header: string;
  icon: ReactNode;
  subtitle: string;
  desc: string;
  buttonText: string;
}
