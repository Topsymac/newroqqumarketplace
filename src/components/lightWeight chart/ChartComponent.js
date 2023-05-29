import React, { useContext, useEffect, useRef } from "react";
import { formatDate } from "../../utilis/FormatDate";
// import { ChartThemeChanger } from "./chart theme changer/ChartThemeChanger";
import { createChart, ColorType } from "lightweight-charts";
import { ThemeContext } from "../../context/ThemeContext";

// Import the watermark image
import watermarkImageDark from "../../Images/Logo-White.png";
import watermarkImageLight from "../../Images/roqqu-color.svg";

import "./chartcomponent.css";

export const ChartComponent = ({ data, colors, timeInterval }) => {
  const { theme } = useContext(ThemeContext);

  // console.log(data.value)
  // const openPrice = data && data[0] > 0 && data[0].value;
  const openPrice = data && data[0] && data[0].value;
  const baseValue = parseInt(openPrice);
  // console.log(baseValue)

  const { backgroundColor } = colors;

  const chartContainerRef = useRef();
  const chartRef = useRef();
  const handleResize = () => {
    chartRef.current.applyOptions({
      width: chartContainerRef.current.clientWidth,
    });
  };

  // const myPriceFormatter = (data)=>{
  //   if (data > 1000) {
  //     data.toFixed(2) + "k";
  //   } else {
  //     data.toFixed(2) + "$";
  //   }
  // };

  useEffect(() => {
    chartRef.current = createChart(chartContainerRef.current, {
      seriesOptions: {
        baselineSeries: {
          seriesMarkerShape: "circle", // Add this line
        },
      },
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor: "#808A9D",
        borderColor: "#EFF2F5",
        borderVisible: true,
      },
      width: chartContainerRef.current.clientWidth,
      // height: chartContainerRef.current.clientHeight,
      height: 400,
      timeScale: {
        secondsVisible: true,
        visible: true,
        borderVisible: true,
        minBarSpacing: 2,
        lockVisibleTimeRangeOnResize: true,
      },
      // leftPriceScale: {
      //   drawTicks: true,
      //   borderVisible: true,
      //   borderColor: "#A7B1BC50",
      // },
      localization: {
        priceFormatter: (data) =>
          data > 10000
            ? (data / 1000).toFixed(2) + "K"
            : data > 1000
            ? data.toFixed() + "k"
            : data > 1
            ? "$" + data.toFixed(2)
            : data < 1
            ? data.toFixed(4) + "$"
            : data.toFixed(2) + "$",
        // data > 1 ? data.toFixed(2) + "k" : data.toFixed(2) + "$",
      },
      // minMove:0.0000001
    });
    // Set the price scale to the left-hand side
    chartRef.current.applyOptions({
      leftPriceScale: {
        visible: true,
        lockVisibleTimeRangeOnResize: true,
      },
      rightPriceScale: {
        visible: false,
        lockVisibleTimeRangeOnResize: true,
      },
      priceScale: {
        // minMove: 0.00001,
        lockVisibleTimeRangeOnResize: true,
        // mode: 1, // set to "price" mode
        autoScale: false, // turn off auto scaling
        invertScale: false, // set to false for normal scale
        alignLabels: true, // align labels to the right side
        borderVisible: true, // turn on border
        lockScale: true,
      },
      timeScale: {
        fixLeftEdge: true,
        fixRightEdge: true,
        barSpacing: 3,
        autoScale: false,
        borderVisible: true,
        secondsVisible: true,
        visible: true,
        lockVisibleTimeRangeOnResize: true,
        tickMarkFormatter: function (timestamp) {
          if (timeInterval === "1W") {
            return new Date(timestamp).getDate();
          } else if (timeInterval === "1M") {
            // console.log(new Date(timestamp));
            return new Date(timestamp).getMonth() + 1;
          } else if (timeInterval === "6M") {
            return new Date(timestamp).getMonth() + 1;
          } else if (timeInterval === "1Y") {
            return new Date(timestamp).getMonth() + 1;
          } else {
            return formatDate(new Date(timestamp));
          }
        },
        timeVisible: true,
      },
      grid: {
        vertLines: {
          visible: false, // remove vertical lines
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.176)", // set color of horizontal lines
          lineWidth: 0.1, // set thickness of horizontal lines
          visible: true,
        },
      },
    });

    chartRef.current.timeScale().fitContent();

    const baselineSeries = chartRef.current.addBaselineSeries({
      scaleMargins: {
        top: 0.1, // highest point of the series will be 10% away from the top
        bottom: 0.2, // lowest point will be 40% away from the bottom
      },
      baseValue: { type: "price", price: baseValue },
      topLineColor: "#16C784",
      bottomLineColor: "#EA3943",
      lastValueVisible: false,
      priceLineVisible: false,
    });

    // when i did this i was able to see the prices on the price scale below 0.001
    baselineSeries.applyOptions({
      priceFormat: { type: "price", precision: 5, minMove: 0.000000001 },
    });

    const volumeSeries = chartRef.current.addHistogramSeries({
      width: 700,
      height: 200,
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
      scaleMargins: {
        top: 0,
        bottom: 0,
      },
      overlay: true,
      lineWidth: 3,
    });

    volumeSeries.priceScale().applyOptions({
      // set the positioning of the volume series
      scaleMargins: {
        top: 0.9, // highest point of the series will be 70% away from the top
        bottom: 0,
      },
    });
    baselineSeries.setData(data);
    volumeSeries.setData(data);

    const ChartThemeChanger = () => {
      if (theme === "Dark") {
        chartRef.current.applyOptions({
          leftPriceScale: {
            visible: true,
            lockVisibleTimeRangeOnResize: true,
            borderColor: "#2C2E3D",
          },
          timeScale: {
            borderColor: "#2C2E3D",
          },
        });
        volumeSeries.applyOptions({
          color: "#263052",
        });
      }
      if (theme === "Light") {
        chartRef.current.applyOptions({
          leftPriceScale: {
            visible: true,
            lockVisibleTimeRangeOnResize: true,
            borderColor: "#eff2f5",
          },
          timeScale: {
            borderColor: "#eff2f5",
          },
        });
        volumeSeries.applyOptions({
          color: "#CFD6E4",
        });
      }
    };

    // Apply theme changes
    ChartThemeChanger(theme);

    // Tooltip
    const container = chartContainerRef.current;

    const toolTipWidth = 250;
    const toolTipHeight = 120;
    const toolTipMargin = 15;

    // Create and style the tooltip html element
    const toolTip = document.createElement("div");
    toolTip.style = `width: 220px; height: 110px; position: absolute; display: none; padding: 8px; box-sizing: border-box;z-index: 1000; top: -100px; left: 12px; pointer-events: none;`;
    container.appendChild(toolTip);

    // update tooltip
    chartRef.current.subscribeCrosshairMove((param) => {
      // console.log(param);
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > container.clientWidth ||
        param.point.y < 0 ||
        param.point.y > container.clientHeight
      ) {
        toolTip.style.display = "none";
      } else {
        // time will be in the same format that we supplied to setData.
        // thus it will be YYYY-MM-DD
        const dateStr = formatDate(new Date(param.time));

        // get the date form param.time
        const timeData = param.time;
        const dateData = new Date(timeData);
        const day = dateData.getDate().toString().padStart(2, "0");
        // const month = (dateData.getMonth() + 1).toString().padStart(2, "0");
        const month = (dateData.getMonth() + 1).toString();
        const year = dateData.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;

        toolTip.style.display = "block";
        const data = param.seriesData.get(baselineSeries);
        const price = data.value !== undefined ? data.value : data.close;

        toolTip.innerHTML = `<div
        style="
        background-color: ${theme === "Light" ? "white" : "#313445"};
          box-shadow:${theme === "Light" ? "0px 0px 10px #eeeeeed1" : "unset"};
          width: 250px;
          height:80px;
          border-radius: 5px;
          padding: 10px 20px;
        "
      >
      <div style="display:flex;justify-content: space-between">
      <div style="color:${
        theme === "Dark" ? "white" : "black"
      };font-size: 14px; font-weight: bold">${formattedDate}</div>
      <div style="color: #808A9D; font-size: 13px">${dateStr}</div>
      </div>
      <div style="margin-top:0.6rem">
      <div style="margin:0px;display:flex;align-items:center">   
            <div class=${
              price > baseValue ? "circle2" : "circle"
            } style="margin:0px"></div>
            <div style="margin-left:0.6rem">
              <span style="color: #808A9D; font-size: 13px">Price:</span>
              <span
                style="font-size: 14px; font-weight: bold;padding-left:0.4rem;color:${
                  theme === "Dark" ? "white" : "black"
                }" 
              >
              $${price > 1000 ? Math.round(price).toFixed(2) : price}
              </span>      
            </div>
          </div>
        </div>
        <div>
          <div style="margin-top: 0.5rem;display:flex;align-items:center">
          <div style="align-self:start">
              <i class="fa-solid fa-square-caret-down" style="color: #808A9D; font-size: 13px"></i>
          </div>
          <div style="margin-left:0.6rem">
              <span style="color: #808A9D; font-size: 13px">Vol 24h:</span>
              <span
                style="font-size: 14px; font-weight: bold;padding-left:0.4rem;color:${
                  theme === "Dark" ? "white" : "black"
                }"
              >
                $17.49B
          </span>
          
          </div>
          </div>
        </div>
      </div>`;

        const coordinate = baselineSeries.priceToCoordinate(price);
        let shiftedCoordinate = param.point.x - 0;
        if (coordinate === null) {
          return;
        }
        shiftedCoordinate = Math.max(
          0,
          Math.min(container.clientWidth - toolTipWidth, shiftedCoordinate)
        );
        const coordinateY =
          coordinate - toolTipHeight - toolTipMargin > 0
            ? coordinate - toolTipHeight - toolTipMargin
            : Math.max(
                0,
                Math.min(
                  container.clientHeight - toolTipHeight - toolTipMargin,
                  coordinate + toolTipMargin
                )
              );
        toolTip.style.left = shiftedCoordinate + "px";
        toolTip.style.top = coordinateY + "px";
      }
    });

    // this show the line dividing the loss and profit color
    const avgPriceLine = {
      price: baseValue,
      color: theme === "Dark" ? "white" : "black",
      // lineWidth: lineWidth,
      lineStyle: 1, // LineStyle.Dotted
      axisLabelVisible: true,
      // title: "ave price",
    };
    baselineSeries.createPriceLine(avgPriceLine);

    // Add watermark image based on theme
    const watermarkImage = document.createElement("img");
    watermarkImage.style.width = "80px";
    watermarkImage.style.height = "20px";
    watermarkImage.className = "watermark";
    if (theme === "Dark") {
      watermarkImage.src = watermarkImageDark;
    } else {
      watermarkImage.src = watermarkImageLight;
    }
    chartContainerRef.current.appendChild(watermarkImage);

    chartRef.current.timeScale().fitContent();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chartRef.current.remove();
    };
  }, [
    data,
    colors.backgroundColor,
    backgroundColor,
    timeInterval,
    theme,
    colors.textColor,
  ]);

  return (
    <>
      {theme === "Dark" ? (
        <div
          className="chartComponent__darkMode"
          style={{ position: "relative" }}
        >
          <div ref={chartContainerRef}></div>
        </div>
      ) : (
        <div
          className="chartComponent__lightMode"
          style={{ position: "relative" }}
        >
          <div ref={chartContainerRef}></div>
        </div>
      )}

      {/* <img class="watermark" src="../../Images/Logo-White.png"></img> */}
      {/* <div ref={chartContainerRef} id="container" /> */}
    </>
  );
};
