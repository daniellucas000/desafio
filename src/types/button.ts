import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  bgColor?: string;
  color?: string;
  margin?: string;
}
