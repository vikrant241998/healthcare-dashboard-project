import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import pieChartData from "../data/pieChartData.json"; // 👈 your fake data

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const data = {
    labels: pieChartData.map(item => item.label),
    datasets: [
      {
        label: "Department Share",
        data: pieChartData.map(item => item.value),
        backgroundColor: [
          "#60A5FA", // blue-400
          "#34D399", // green-400
          "#FBBF24", // yellow-400
          "#F87171", // red-400
          "#A78BFA"  // purple-400
        ],
        borderColor: "#0f172a",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#cbd5e1", // slate-300
          boxWidth: 15,
          padding: 15,
        },
      },
    },
  };

  return (
    <div className="bg-[#0f172a] text-white rounded-xl p-4 w-full shadow-md">
      <h2 className="text-base font-semibold !p-4 !mb-4">
        Department-wise Patient Distribution
      </h2>
      {/* <div className="relative w-full h-[300px] sm:h-[320px] md:h-[350px]"> */}
      <div className="relative w-full h-[300px] sm:h-[320px] md:h-[350px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartComponent;
