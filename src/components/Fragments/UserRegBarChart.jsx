import "moment/locale/id";
import moment from "moment/moment";
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

const UserRegBarChart = (props) => {
  const { users } = props;

  const prepareChartData = () => {
    const months = Array(12).fill(0);
    users.forEach((user) => {
      const month = moment(user.created_at).month(); // get month (0-11)
      months[month]++;
    });

    return months;
  };

  const data = {
    labels: moment.monthsShort(), // ["Jan", "Feb", "Mar", ..., "Dec"]
    datasets: [
      {
        label: "Pengguna Mendaftar per Bulan",
        data: prepareChartData(),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Grafik Jumlah Pengguna Mendaftar per Bulan",
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
          text: "Bulan",
        },
      },
      y: {
        title: {
          display: true,
          text: "Jumlah Pengguna",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="p-4">
      <Bar options={options} data={data} height={400} width={800} />
    </div>
  );
};

export default UserRegBarChart;
