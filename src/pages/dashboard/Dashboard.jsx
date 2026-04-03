import {
  statistics,
  dashDetails_top,
  dashDeals_cont,
  dealsContTop,
} from "../../data/Muhammadsodiq";
import { LineChart } from "@mui/x-charts/LineChart";

import {
  dateAxisFormatter,
  percentageFormatter,
  usUnemploymentRate,
} from "../../components/dashboardSalesDetailsChart/usUnemploymentRate.jsx";
import { Link } from "react-router-dom";

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
          <Link to="/revenue"
            className="bg-[#FCFDFD] py-[10px] px-[16px] rounded-[4px] text-[#2B303466] text-[16px] font-[600] cursor-pointer"
            style={{ border: "0.6px solid #D5D5D5" }}
          >
            October
          </Link>
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
      <div className="flex flex-col gap-[30px] items-center w-full py-[50px] px-[50px] rounded-4xl bg-[#FFFFFF]">
        <div className="flex w-full items-center justify-between">
          <h3 className="nunito font-[700] text-[30px] text-[#202224]">
            {dashDetails_top.title}
          </h3>
          <button className="font-[500] nunito text-[14px] text-[#2B303466] rounded-[4px] border-[1px] border-[#D5D5D5] bg-[#FCFDFD] py-[10px] px-[20px] cursor-pointer">
            {dashDetails_top.btn}
          </button>
        </div>
        <table className="items-center w-full">
          <thead className="rounded-2xl bg-blue-200 w-full grid-cols-6 grid items-center">
            {dealsContTop.map((top, index) => {
              return (
                <tr
                  key={index}
                  className="py-[16px] items-center text-start"
                  style={{ paddingLeft: "20px" }}
                >
                  <th className="nunito font-[700] text-[14px]">{top}</th>
                </tr>
              );
            })}
          </thead>
          <tbody className="w-full bg-inherit items-start">
            {dashDeals_cont.map((cart, index) => {
              return (
                <tr
                  key={index}
                  className="py-[16px] px-[20px] grid  grid-cols-6 w-full justify-around items-start"
                >
                  <td
                    className="bg-inherit py-[16px] items-center flex gap-[10px] nunito font-[550] text-[14px] text-[#202224]"
                    style={{ paddingLeft: "15px" }}
                  >
                    <img src={cart.img} alt="" />
                    <p>{cart.title}</p>
                  </td>
                  <td
                    className="py-[16px] nunito font-[550] text-[14px] text-[#202224]"
                    style={{ paddingLeft: "15px" }}
                  >
                    <p>{cart.location}</p>
                  </td>
                  <td
                    className="py-[16px] nunito font-[550] text-[14px] text-[#202224]"
                    style={{ paddingLeft: "15px" }}
                  >
                    <p>{cart.date}</p>
                  </td>
                  <td
                    className="py-[16px] nunito font-[550] text-[14px] text-[#202224]"
                    style={{ paddingLeft: "15px" }}
                  >
                    <p>{cart.piece}</p>
                  </td>
                  <td
                    className="py-[16px] nunito font-[550] text-[14px] text-[#202224]"
                    style={{ paddingLeft: "15px" }}
                  >
                    <p>{cart.amount}</p>
                  </td>
                  <td
                    className="py-[16px] nunito font-[550] text-[14px] text-[#202224] items-start"
                    style={{ paddingLeft: "15px" }}
                  >
                    <p className="py-[10px] px-[20px] bg-[#00B69B] rounded-4xl w-auto text-[#FFFFFF] nunito font-[700] text-[14px]">
                      {cart.status}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
