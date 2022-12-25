import React, { useState } from "react";
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
import type { NovelStatistics } from "../../../interfaces/novel.type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "일일 통계",
    },
  },
};

const labels = ["view", "good", "book"];
const colors = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(255, 159, 64, 0.5)",
];

export function GrowthChart({ data }: { data: NovelStatistics }) {
  const [label, setLabel] = useState(0);
  const chartData = {
    labels: data.growth.map((x) => `${x.created_at}`),
    datasets: [
      {
        label: labels[label],
        data: data.growth.map(
          (ep) => (ep as Record<string, any>)[labels[label]]
        ),
        backgroundColor: colors[label],
      },
    ],
  };
  return (
    <div style={{ height: "50%" }}>
      <Bar options={options} data={chartData} width={"100%"} />
      <button onClick={() => setLabel((label + 1) % labels.length)}></button>
    </div>
  );
}
