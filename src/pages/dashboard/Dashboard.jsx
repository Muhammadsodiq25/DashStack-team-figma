import { statistics } from "../../data/Muhammadsodiq";
import { LineChart } from "@mui/x-charts/LineChart";

import {
  dateAxisFormatter,
  percentageFormatter,
  usUnemploymentRate,
} from "../../components/dashboardSalesDetailsChart/usUnemploymentRate.jsx";

const xAxis = [
  {
    dataKey: "date",
    scaleType: "time",
    valueFormatter: dateAxisFormatter,
  },
];

const yAxis = [
  {
    valueFormatter: percentageFormatter,
  },
];

const series = [
  {
    dataKey: "rate",
    showMark: false,
    valueFormatter: percentageFormatter,
  },
];

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[35px]">
      <div className="w-full items-start">
        <h1 className="text-[32px] font-[700]">Dashboard</h1>
      </div>
      <div className="flex w-full justify-between items-center">
        {statistics.map((cart, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-3xl flex flex-col gap-[20px] py-[30px] px-[30px] w-[23%]"
          >
            <div className="flex w-full items-start gap-[50px] justify-between">
              <div className="flex flex-col items-start gap-[16px]">
                <p className="text-[#202224] nunito font-[600] text-[16px]">
                  {cart.subtitle}
                </p>
                <h3 className="text-[#202224] font-bold text-[28px]">
                  {cart.title}
                </h3>
              </div>
              <img src={cart.img} width={50} className="" alt="" />
            </div>
            <p className="text-[#606060] font-[600] text-[18px]">
              <span style={{ color: `${cart.statisticsSpanCol}` }}>
                {cart.statisticsSpan}
              </span>{" "}
              {cart.statistics}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[20px] w-full rounded-3xl bg-[#FFFFFF] items-center py-[25px] px-[25px]">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-[#202224] font-bold text-[30px]">
            Sales Details
          </h3>
          <button
            className="bg-[#FCFDFD] py-[10px] px-[16px] rounded-[4px] text-[#2B303466] text-[16px] font-[600] cursor-pointer"
            style={{ border: "0.6px solid #D5D5D5" }}
          >
            October
          </button>
        </div>
        <div className="w-full">
          <LineChart
            dataset={usUnemploymentRate}
            xAxis={xAxis}
            yAxis={yAxis}
            series={series}
            height={350}
            style={{ width: "100%" }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
