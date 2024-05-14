import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import UAParser from "ua-parser-js";

const DeviceUsagePieChart = ({ histories }) => {
  // Menghitung jumlah pencarian berdasarkan jenis perangkat
  const deviceCounts = histories.reduce((counts, history) => {
    const parser = new UAParser(history.user_agent);
    const deviceType = parser.getDevice().type || "desktop";

    if (!counts[deviceType]) {
      counts[deviceType] = 0;
    }
    counts[deviceType]++;

    return counts;
  }, {});

  // Menyusun data untuk ChartJS
  const data = {
    labels: Object.keys(deviceCounts),
    datasets: [
      {
        data: Object.values(deviceCounts),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#2B8AC9", "#FF3355", "#FFBB28"],
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
              text: "Pencarian Berdasarkan Jenis Perangkat",
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

export default DeviceUsagePieChart;
