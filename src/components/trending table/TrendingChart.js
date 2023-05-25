import React, { useEffect, useState } from 'react'
// import "./Asset.css";
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


const TrendingChart = ({ symbol, change }) => {
const [chartData, setChartData] = useState({});

useEffect(() => {
  fetch(`https://staging.roqqu.com/v2/history?symbol=${symbol}&interval=1D`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.data);
      setChartData({
        labels: data.data.map((item) => item.id),
        datasets: [
          {
            data: data.data.map((item) => item.price),
            fill: false,
            borderColor: `${change < 0 ? "red" : "#16c784"}`,
            // backgroundColor: "rgb(255,99, 32, 0.3)",
            tension: 0.6,
          },
        ],
      });
    })

    .catch((err) => console.log(err.message));
}, [symbol, change]);
//   console.log(chartData);
return (
  <div className="chartTwo">
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
);
};

export default TrendingChart
