import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TopKeywordsBarChart = ({ histories }) => {
  const keywordCounts = histories.reduce((counts, history) => {
    const keyword = history.keyword.trim().toLowerCase();
    if (!counts[keyword]) {
      counts[keyword] = 0;
    }
    counts[keyword]++;
    return counts;
  }, {});

  // Mendapatkan 10 kata kunci teratas
  const topKeywords = Object.entries(keywordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // Menyusun data untuk ChartJS
  const data = {
    labels: topKeywords.map(([keyword]) => keyword),
    datasets: [
      {
        label: "Jumlah Pencarian",
        data: topKeywords.map(([_, count]) => count),
        backgroundColor: "#36A2EB",
        hoverBackgroundColor: "#2B8AC9",
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "10 Kata Kunci Paling Populer",
            },
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          },
          indexAxis: "y", // Horizontal bar chart
          scales: {
            x: {
              title: {
                display: true,
                text: "Jumlah Pencarian",
              },
              ticks: {
                stepSize: 1,
              },
            },
            y: {
              title: {
                display: true,
                text: "Kata Kunci",
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

export default TopKeywordsBarChart;
