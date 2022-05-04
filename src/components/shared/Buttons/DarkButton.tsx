import React from "react";
import { DarkButtonStyle } from "./DarkButton.style";

interface DarkButtonProps {
  title: string;
  type?: "button" | "submit";
  onClick(): void;
}

export const DarkButton = ({
  title,
  type = "button",
  onClick,
}: DarkButtonProps) => {
  return (
    <DarkButtonStyle type={type} onClick={onClick}>
      {title}
    </DarkButtonStyle>
  );
};
