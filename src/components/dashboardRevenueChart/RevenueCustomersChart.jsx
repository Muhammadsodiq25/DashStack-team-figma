import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "New Customers", value: 400, color: "#4880FF" },
  { label: "Repeated", value: 300, color: "#E2EAF8" },
  { label: "New Customers", value: 400, color: "#4880FF" },
  { label: "Repeated", value: 300, color: "#E2EAF8" },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export default function RevenueCustomersChart() {
  return (
    <PieChart
      series={[
        {
          width: 300,
          height: 300,
          innerRadius: 70,
          outerRadius: 100,
          data,
          arcLabel: "value",
        },
      ]}
      {...settings}
    />
  );
}
