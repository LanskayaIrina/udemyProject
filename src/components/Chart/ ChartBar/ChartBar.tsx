import React from "react";
import {
  ChartBarFill,
  ChartBarInner,
  ChartBarLabel,
  ChartBarStyle,
} from "./ChartBar.style";

interface ChartBarProps {
  value: number;
  maxValue: number;
  label: string;
}

export const ChartBar = ({ value, maxValue, label }: ChartBarProps) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <ChartBarStyle>
      <ChartBarInner>
        <ChartBarFill style={{ height: barFillHeight }} />
        <ChartBarLabel>{label}</ChartBarLabel>
      </ChartBarInner>
    </ChartBarStyle>
  );
};
