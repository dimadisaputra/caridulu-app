import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import UAParser from "ua-parser-js";

const BrowserUsagePieChart = ({ histories }) => {
  // Menghitung jumlah pencarian berdasarkan jenis browser
  const browserCounts = histories.reduce((counts, history) => {
    const parser = new UAParser(history.user_agent);
    const browserName = parser.getBrowser().name || "Lainnya";

    if (!counts[browserName]) {
      counts[browserName] = 0;
    }
    counts[browserName]++;

    return counts;
  }, {});

  // Menyusun data untuk ChartJS
  const data = {
    labels: Object.keys(browserCounts),
    datasets: [
      {
        data: Object.values(browserCounts),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#9966FF",
          "#4BC0C0",
        ],
        hoverBackgroundColor: [
          "#2B8AC9",
          "#FF3355",
          "#FFBB28",
          "#8A2BE2",
          "#39A2B8",
        ],
      },
    ],
  };

  return (
    <div>
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Pencarian Berdasarkan Browser",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default BrowserUsagePieChart;
