import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const HistoryRolePieChart = ({ histories }) => {
  // Menghitung jumlah pencarian pengguna terdaftar dan guest
  const registeredSearchCount = histories.filter(
    (history) => history.user_id !== null
  ).length;
  const guestSearchCount = histories.filter(
    (history) => history.user_id === null
  ).length;

  // Menyusun data untuk ChartJS
  const data = {
    labels: ["Pengguna Terdaftar", "Guest"],
    datasets: [
      {
        label: "Pencarian",
        data: [registeredSearchCount, guestSearchCount],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#2B8AC9", "#FF3355"],
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
              text: "Pencarian Pengguna Terdaftar vs Guest",
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

export default HistoryRolePieChart;
