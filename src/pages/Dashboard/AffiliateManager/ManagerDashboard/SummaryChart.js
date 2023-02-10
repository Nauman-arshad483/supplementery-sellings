import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Customers",
      data: labels.map(() => Math.random() * 5),
      borderColor: "#449E10",
      backgroundColor: "#51CE0F",
    },
    {
      label: "Referrals",
      data: labels.map(() => Math.random() * 5),
      borderColor: "#990D0D",
      backgroundColor: "#C63939",
    },
  ],
};

const SummaryChart = () => {
  return (
    <div
      className="px-5 -mt-5 bg-white pb-5"
      style={{ height: "36vh", width: "100%" }}
    >
      <Line options={options} data={data} />
    </div>
  );
};

export default SummaryChart;
