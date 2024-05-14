import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarChart = (props) => {
  const { chartData } = props;

  const option = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          suggestedMin: "min-int-value",
          suggestedMax: "max-int-value",
        },
      },
    },
    responsive: true,
  };

  return (
    <div>
      <Bar options={option} data={chartData}></Bar>
    </div>
  );
};

export default VerticalBarChart;
