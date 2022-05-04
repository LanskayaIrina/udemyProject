import React from "react";

import { ChartBar } from "../ ChartBar/ChartBar";
import { ChartDataPoints } from "../../Expenses/ExpensesChart/ExpensesChart";

import { ChartStyle } from "./Chart.style";

export const Chart = ({ dataPoints }: { dataPoints: ChartDataPoints[] }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <ChartStyle>
      {dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </ChartStyle>
  );
};
