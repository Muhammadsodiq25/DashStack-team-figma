import "./UiElements.css";
import Abdulbosit from "../../data/Abdulbosit";
import { BarChart, PieChart } from "@mui/x-charts";

const UiElements = () => {
  const data = Abdulbosit.find((item) => item.page === "ui-elements");

  return (
    <div className="ui">
      <div className="ui__top">
        <h2 className="ui__title">{data.title}</h2>

        <div className="ui__filter">
          <span className="ui__filter-text">{data.filterText}</span>
          <select className="ui__select">
            <option>{data.dropdown}</option>
          </select>
        </div>
      </div>

      <div className="ui__card">
        <h3 className="ui__card-title">Bar Chart</h3>

        <div className="ui__bars">
          <BarChart
            xAxis={[{ scaleType: "band", data: [1, 2, 3, 4, 5, 6, 7] }]}
            series={[
              {
                data: [40, 25, 30, 22, 35, 28, 20],
                color: "#4c6ef5",
              },
            ]}
            width={250}
            height={200}
          />

          <BarChart
            xAxis={[{ scaleType: "band", data: [1, 2, 3, 4, 5, 6, 7] }]}
            series={[
              {
                data: [20, 30, 25, 35, 40, 30, 45],
                color: "#adb5bd",
              },
              {
                data: [10, 15, 12, 18, 20, 15, 22],
                color: "#20c997",
              },
            ]}
            width={250}
            height={200}
          />

          <BarChart
            xAxis={[{ scaleType: "band", data: [1, 2, 3, 4, 5, 6, 7] }]}
            series={[
              {
                data: [15, 35, 20, 40, 25, 45, 30],
                color: "#4c6ef5",
              },
              {
                data: [25, 20, 30, 25, 35, 20, 40],
                color: "#f59f00",
              },
            ]}
            width={250}
            height={200}
          />

          <BarChart
            xAxis={[{ scaleType: "band", data: [1, 2, 3, 4, 5, 6, 7] }]}
            series={[
              {
                data: [10, 20, 15, 30, 25, 35, 40],
                color: "#fcc2d7",
              },
              {
                data: [15, 25, 20, 35, 30, 40, 45],
                color: "#f06595",
              },
            ]}
            width={250}
            height={200}
          />
        </div>
      </div>

      <div className="ui__card">
        <h3 className="ui__card-title">Pie Chart</h3>

        <div className="ui__pies">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 25, color: "#4c6ef5" },
                  { id: 1, value: 75, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 30, color: "#9775fa" },
                  { id: 1, value: 70, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 40, color: "#ff922b" },
                  { id: 1, value: 60, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 35, color: "#339af0" },
                  { id: 1, value: 65, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="ui__card">
        <h3 className="ui__card-title">Donut Chart</h3>

        <div className="ui__pies">
          <PieChart
            series={[
              {
                innerRadius: 40,
                data: [
                  { id: 0, value: 25, color: "#20c997" },
                  { id: 1, value: 75, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />

          <PieChart
            series={[
              {
                innerRadius: 40,
                data: [
                  { id: 0, value: 30, color: "#4c6ef5" },
                  { id: 1, value: 70, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />

          <PieChart
            series={[
              {
                innerRadius: 40,
                data: [
                  { id: 0, value: 40, color: "#fab005" },
                  { id: 1, value: 60, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />

          <PieChart
            series={[
              {
                innerRadius: 40,
                data: [
                  { id: 0, value: 35, color: "#ff922b" },
                  { id: 1, value: 65, color: "#e9ecef" },
                ],
              },
            ]}
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default UiElements;
