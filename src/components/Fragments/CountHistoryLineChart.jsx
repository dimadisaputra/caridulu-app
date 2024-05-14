import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "moment/locale/id";
import moment from "moment";

const CountHistoryLineChart = ({ histories }) => {
  // Menyaring data histories untuk 7 hari terakhir
  const lastSevenDays = moment().subtract(6, "days").format("YYYY-MM-DD");
  const filteredHistories = histories.filter((history) => {
    const createdAt = moment(history.created_at).format("YYYY-MM-DD");
    return createdAt >= lastSevenDays;
  });

  // Membuat array untuk 7 hari terakhir
  const sevenDaysRange = Array.from(Array(7).keys()).map((day) =>
    moment().subtract(day, "days").format("YYYY-MM-DD")
  );

  // Mengelompokkan data berdasarkan tanggal
  const groupedData = sevenDaysRange.reduce((acc, date) => {
    const histories = filteredHistories.filter((history) => {
      const createdAt = moment(history.created_at).format("YYYY-MM-DD");
      return createdAt === date;
    });
    acc[date] = histories;
    return acc;
  }, {});

  // Menghitung jumlah histories untuk setiap tanggal
  const chartData = sevenDaysRange.map((date) => {
    const searchCount = groupedData[date] ? groupedData[date].length : 0;
    return { date, searchCount };
  });

  // Menyusun data untuk ChartJS
  const labels = chartData.map(({ date }) => moment(date).format("DD MMM"));
  const data = {
    labels,
    datasets: [
      {
        label: "Jumlah Pencarian",
        data: chartData.map(({ searchCount }) => searchCount),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4">
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Grafik Jumlah Pencarian Per Hari (7 Hari Terakhir)",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: "Tanggal",
              },
              reverse: true,
            },
            y: {
              title: {
                display: true,
                text: "Jumlah Pencarian",
              },
              ticks: {
                stepSize: 1,
              },
            },
          },
        }}
        height={400}
        width={800}
      />
    </div>
  );
};

export default CountHistoryLineChart;
