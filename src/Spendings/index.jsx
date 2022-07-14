import "./styles.css";
import { chartData } from "../Chart/data";
import ChartComponent from "../Chart/index";
import { useState } from "react";

function Spendings() {
  function getBgColors() {
    const maxSum = chartData.reduce(
      (acc, shot) => (acc = acc > shot.amount ? acc : shot.amount),
      0
    );
    const color = chartData.map((num) =>
      num.amount === maxSum ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
    );
    return color;
  }

  const [data, setData] = useState({
    labels: chartData.map((data) => data.day),
    datasets: [
      {
        label: "Last 7 days",
        data: chartData.map((value) => value.amount),
        backgroundColor: getBgColors(),
        yAxisID: "yAxis",
      },
    ],
    options: {
      responsive: true,
    },
  });

  return (
    <div className="spendings">
      <div className="spending-container">
        <div className="title"> Spending - Last 7 days</div>
        <div className="bars">
          <ChartComponent chartData={data} />
        </div>
        <div className="overview">
          <div className="total">Total this month</div>
          <div className="total-sum">$478.33</div>
          <div className="last">
            <div className="percentage">+2.4% </div>
            <span className="text">from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Spendings;
