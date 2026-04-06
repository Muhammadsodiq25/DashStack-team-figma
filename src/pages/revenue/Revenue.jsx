import RevenueanAnalyticsChart from "../../components/dashboardRevenueChart/RevenueanAnalyticsChart";
import RevenueCustomersChart from "../../components/dashboardRevenueChart/RevenueCustomersChart";
import StackedAreaChart from "../../components/dashboardRevenueChart/RevenueLineChart";
import { revenue_top, arrows } from "../../data/Muhammadsodiq";

const Revenue = () => {
  return (
    <div className="w-full items-center gap-[50px]">
      <div className="w-full items-start">
        <h3 className="nunito font-[700] text-[35px]">Dashboard</h3>
        <div className="flex flex-col w-full gap-[25px] mt-[30px] py-[30px] px-[30px] bg-[#FFFFFF] rounded-2xl">
          <div className="flex items-center w-full justify-between">
            <h4 className="nunito font-[700] text-[24px]">
              {revenue_top.title}
            </h4>
            <button className="border-[1px] border-[#D5D5D5] py-[10px] px-[18px] rounded-[4px] font-[500] nunito text-[12px] bg-[#FCFDFD] text-[#2B303466] cursor-pointer">
              {revenue_top.btn}
            </button>
          </div>
          <StackedAreaChart />
        </div>
      </div>
      <div className="flex w-full justify-between mt-[30px]">
        <div className="flex flex-col rounded-2xl bg-[#FFFFFF] py-[30px] px-[30px] gap-[30px] w-[30%]">
          <h3 className="nunito text-[#202224] font-[700] text-[22px]">
            Customers
          </h3>
          <RevenueCustomersChart />
        </div>
        <div className="flex flex-col rounded-2xl bg-[#FFFFFF] py-[30px] px-[30px] gap-[30px] w-[30%]">
          <h3 className="nunito text-[#202224] font-[700] text-[22px]">
            Featured Product
          </h3>
          <div className="flex w-full items-center justify-between">
            {arrows.map((arrow, index) => {
              return (
                <button
                  key={index}
                  className="border-0 text-[20px] cursor-pointer"
                >
                  <img src={arrow} alt="" />
                </button>
              );
            })}
          </div>
          <h4 className="text-center text-[18px] font-[700]">
            Beats Headphone 2026 <br />{" "}
            <span className="text-[#4880FF]">$89.00</span>
          </h4>
        </div>
        <div className="flex flex-col rounded-2xl bg-[#FFFFFF] py-[30px] px-[30px] gap-[30px] w-[30%]">
          <h3 className="nunito text-[#202224] font-[700] text-[22px]">
            Sales Analytics
          </h3>
          <RevenueanAnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
