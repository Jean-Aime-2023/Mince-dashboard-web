// BarChart.jsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData } from "../data/FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Average per week", // Title text
      align: "start", // Align the title to the left
      padding: {
        top: 10,
        bottom: 10,
      },
      font: {
        family: "'Poppins', sans-serif", // Specify 'Poppins' font family
        size: 18,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        display: true,
        padding: 10,
      },
    },
    y: {
      ticks: {
        display: true,
        padding: 10,
      },
    },
  },
  layout: {
    padding: 20,
  },
  elements: {
    bar: {
      borderRadius: 50, // Rounded corners for bars
    },
  },
  // Adjust bar width and gap between bars
  indexAxis: 'x', // Set the axis for bar grouping
  barPercentage: 0.6, // Adjust bar width
  categoryPercentage: 0.8, // Adjust gap between bars within a category
};

const BarChart = () => {
  return <Bar options={options} data={barChartData} />;
};

export default BarChart;
