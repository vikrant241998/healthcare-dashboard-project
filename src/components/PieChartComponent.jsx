import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import pieChartData from "../data/pieChartData.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const data = {
    labels: pieChartData.map((item) => item.label),
    datasets: [
      {
        label: "Department Share",
        data: pieChartData.map((item) => item.value),
        backgroundColor: [
          "#60A5FA",
          "#34D399",
          "#FBBF24",
          "#F87171",
          "#A78BFA",
        ],
        borderColor: isDarkMode ? "#0f172a" : "#d6e9f9",

        borderWidth: 3,
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
          color: isDarkMode ? "#cbd5e1" : "#4a6480",
          boxWidth: 15,
          padding: 15,
        },
      },
    },
  };

  return (
    <div
      className="dark:bg-[#0f172a] bg-[#ffffff] text-white rounded-xl p-4 w-full shadow-md border-2 border-[#d6e9f9] dark:border-none 
"
    >
      <h2 className="text-xl font-semibold !p-4 !mb-4  dark:text-white text-[#4a6480] ">
        Department-wise Patient Distribution
      </h2>
      <div className="relative w-full h-[300px] sm:h-[320px] md:h-[350px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartComponent;
