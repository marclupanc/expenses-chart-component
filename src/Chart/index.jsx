import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

function ChartComponent({ chartData }) {
  return (
    <div className="bars">
      <Bar data={chartData} />
    </div>
  );
}

export default ChartComponent;
