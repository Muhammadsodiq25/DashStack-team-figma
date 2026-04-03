import React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";

const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["5k", "10k", "15k", "20k", "25k", "30k", "35k"];

export default function StackedAreaChart() {
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <LineChart
        series={[
          {
            data: uData,
            label: "Sales",
            area: true,
            stack: "total",
            showMark: false,
            color: "#FF8F6DCC",
          },
          {
            data: pData,
            label: "Profit",
            area: true,
            stack: "total",
            showMark: false,
            color: "#DBA5FF",
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels, height: 30 }]}
        yAxis={[{ width: 50 }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: "none",
          },
        }}
        margin={margin}
      />
    </Box>
  );
}
