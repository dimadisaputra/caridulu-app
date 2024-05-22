import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const MarketplaceVisitsPieChart = ({ productVisits }) => {
  // Menghitung jumlah kunjungan untuk setiap marketplace
  const marketplaceVisits = productVisits.reduce((counts, visit) => {
    const marketplace = visit.marketplace;
    if (!counts[marketplace]) {
      counts[marketplace] = 0;
    }
    counts[marketplace]++;
    return counts;
  }, {});

  // Menyusun data untuk ChartJS
  const data = {
    labels: Object.keys(marketplaceVisits),
    datasets: [
      {
        data: Object.values(marketplaceVisits),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#9966FF"],
        hoverBackgroundColor: ["#2B8AC9", "#FF3355", "#FFBB28", "#8A2BE2"],
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
              text: "Kunjungan ke Marketplace",
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

export default MarketplaceVisitsPieChart;
