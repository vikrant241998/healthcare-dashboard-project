import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import weeklyData from "../data/weeklyAppointment.json"; // 👈 import JSON correctly

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const WeeklyAppointment = () => {
  const data = {
    labels: weeklyData.map(item => item.day),
    datasets: [
      {
        label: "Appointments",
        data: weeklyData.map(item => item.appointments),
        borderColor: "#60A5FA", // blue-400
        backgroundColor: "rgba(96,165,250,0.2)", // transparent fill
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: { color: "#cbd5e1" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      x: {
        ticks: { color: "#cbd5e1" },
        grid: { display: false },
      },
    },
  };

  return (
    <>
   <div className="bg-[#0f172a] text-white rounded-xl !p-4 w-full shadow-md">
  <h2 className="text-base font-semibold mb-4">Weekly Appointments Trend</h2>
  <div className="h-[250px] w-full"> 
    <Line
      data={data}
      options={{
        ...options,
        maintainAspectRatio: false,
      }}
    />
  </div>
</div>

    
    
    </>

  );
};

export default WeeklyAppointment;
