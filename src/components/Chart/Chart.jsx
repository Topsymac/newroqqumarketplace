import React, { useEffect, useState } from "react";

import "./Chart.css";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Chart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    fetch("https://staging.roqqu.com/v2/history?symbol=btc&interval=7D")
      .then((response) => response.json())
      .then((data) => {
        setChartData({
          labels: data.data.map((item) => item.id),
          datasets: [
            {
              data: data.data.map((item) => item.price),
              fill: false,
              borderColor: "rgb(255,99, 32)",
              backgroundColor: "rgb(255,99, 32, 0.3)",
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <div>
        {chartData.labels && chartData.datasets ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              pointStyle: false,
              plugins: {
                legend: {
                  display: false,
                },
                title: { display: false, text: "Price" },
              },
              scales: {
                y: {
                  ticks: {
                    display: false,
                  },
                  border: {
                    display: false,
                  },
                  grid: { display: false },
                },
                x: {
                  ticks: {
                    display: false,
                  },
                  border: {
                    display: false,
                  },
                  grid: { display: false },
                },
              },
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Chart;
