import React, { useEffect, useState } from "react";
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

const CryptoChartComponent = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    fetch("https://staging.roqqu.com/v2/history?symbol=btc&interval=1H")
      .then((response) => response.json())
      .then((data) => {
        const threshold=27000;
        setChartData({
          labels: data?.data?.map((item) => item?.id),
          type: "line",
          plugins: [
            {
              afterLayout: (chart) => {
                let ctx = chart.chart.ctx;
                ctx.save();
                let yAxis = chart.scales["y-axis-0"];
                let yThreshold = yAxis.getPixelForValue(threshold);
                let gradient = ctx.createLinearGradient(
                  0,
                  yAxis.top,
                  0,
                  yAxis.bottom
                );
                gradient.addColorStop(0, "green");
                let offset = (1 / yAxis.bottom) * yThreshold;
                gradient.addColorStop(offset, "green");
                gradient.addColorStop(offset, "red");
                gradient.addColorStop(1, "red");
                chart.data.datasets[0].borderColor = gradient;
                ctx.restore();
              },
            },
          ],
          datasets: [
            {
              data: data?.data?.map((item) => item?.price),
            },
          ],
          tension: 0.4,
          fill: true,
        });

      });
  }, []);

  return (
    <>
      <div>
        <div style={{ width: "80%" }}>
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
                      display: true,
                    },
                    border: {
                      display: true,
                    },
                    grid: { display: true },
                  },
                  x: {
                    ticks: {
                      display: true,
                    },
                    border: {
                      display: true,
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
    </>
  );
};

export default CryptoChartComponent;
