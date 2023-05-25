import React, { useEffect, useRef } from "react";
import { formatDate } from "../../utilis/FormatDate";

import { createChart, ColorType,} from "lightweight-charts";
import "./chartcomponent.css";

export const ChartComponent = ({ data, colors, timeInterval }) => {
  // useEffect(() => {
  //   console.log({ data })
  // });
  // const [circle, setCircle] = useState("circle");
  // const [circle2, setCircle2] = useState("circle2");
  const { backgroundColor} = colors;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      // chart.applyOptions({ width: 400, height: 400 });
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      // chart.timeScale().fitContent();
    };

    // function formattedNum(data) {
    //   console.log(data + "ssssss");
    //   return data + "sssssssss";
    // }

    // formattedNum(data)

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor: "#808A9D",
        borderColor: "#EFF2F5",
        borderVisible: true,
      },
      width: chartContainerRef.current.clientWidth,
      // width: 700,
      height: 400,
      timeScale: {
        secondsVisible: true,
        // timeVisible: true,
        visible: true,
        borderVisible: true,
        minBarSpacing: 2,
        lockVisibleTimeRangeOnResize: true,
      },
      // timeScale: {
      //   // // Set the minimum bar spacing to 1 day
      //   // minBarSpacing: 86400,
      //   // // Set the maximum bar spacing to 1 week
      //   // maxBarSpacing: 604800,
      //   minBarSpacing: 2,
      //   lockVisibleTimeRangeOnResize: true,
      //   borderVisible: true,
      // },
      localization: {
        priceFormatter: (data) => data.toFixed(2) + "k",
      },
    });
    // Set the price scale to the left-hand side
    chart.applyOptions({
      leftPriceScale: {
        visible: true,
        lockVisibleTimeRangeOnResize: true,
        borderColor: "#EFF2F5",
        // scaleMargins: {
        //   top: 0.2,
        //   bottom: 0,
        // },
      },
      rightPriceScale: {
        visible: false,
        lockVisibleTimeRangeOnResize: true,
      },
      priceScale: {
        lockVisibleTimeRangeOnResize: true,
        // mode: 1, // set to "price" mode
        autoScale: false, // turn off auto scaling
        invertScale: false, // set to false for normal scale
        alignLabels: true, // align labels to the right side
        borderVisible: true, // turn on border
        borderColor: "#EFF2F5", // set border color
        // scaleMargins: {
        //   top: 0.3,
        //   bottom: 0.25,
        // }, // set margins for price scale
        // Add your own prices list here
        // prices:prices,
      },
      timeScale: {
        // leftOffset: 100000,
        // rightOffset: 12,
        fixLeftEdge:true,
        fixRightEdge:true,
        barSpacing: 3,
        autoScale: false,
        borderVisible: true,
        secondsVisible: true,
        visible: true,
        lockVisibleTimeRangeOnResize: true,
        borderColor: "#EFF2F5",
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
        // visibleRange: {
        //   min,
        // },
      },
      grid: {
        vertLines: {
          visible: false, // remove vertical lines
          // color: "rgba(197, 203, 206, 0.176)",
          // lineWidth: 0.1, // set thickness of horizontal lines
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.176)", // set color of horizontal lines
          lineWidth: 0.1, // set thickness of horizontal lines
          visible: true,
        },
      },

      // barSpacing: 10,
    });

// chart.timeScale().setVisibleLogicalRange({ from: 0.5, to: 8.5 });

    chart.timeScale().fitContent();

    const baselineSeries = chart.addBaselineSeries({
      // baseValue: { type: "price", price: 26.38 },
      scaleMargins: {
        top: 0.1, // highest point of the series will be 10% away from the top
        bottom: 0.2, // lowest point will be 40% away from the bottom
      },
      baseValue: { type: "price", price: 26.84 },
      topLineColor: "#16C784",
      // topFillColor1: "#d9f6ebdd",
      // topFillColor2: "#d9f6ebdd",
      bottomLineColor: "#EA3943",
      // bottomFillColor1: "#FEFBFB",
      // bottomFillColor2: "#FEFBFB",
    });

    // baselineSeries.priceScale().applyOptions({
    //   scaleMargins: {
    //     top: 0.1, // highest point of the series will be 10% away from the top
    //     bottom: 0.2, // lowest point will be 40% away from the bottom
    //   },
    // });
    const volumeSeries = chart.addHistogramSeries({
      color: "#CFD6E4",
      // color: "#EFF2F5",
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
    // chart.timeScale().setVisibleLogicalRange({ from: 0.3, to: 1});
    // chart.timeScale().setVisibleRange({
    //   from: 0.3,
    //   to: 0.4,
    // });

    const container = chartContainerRef.current;

    const toolTipWidth = 270;
    const toolTipHeight = 0;
    const toolTipMargin = 15;

    // Create and style the tooltip html element
    const toolTip = document.createElement("div");
    toolTip.style = `width: 300px; height: 110px; position: absolute; display: none; padding: 8px; box-sizing: border-box;z-index: 1000; top: 0px; left: 12px; pointer-events: none;`;
    container.appendChild(toolTip);

    // update tooltip
    chart.subscribeCrosshairMove((param) => {
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
        // const dateStr = param.time;

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
          background-color: white;
          width: 300px;
          box-shadow: 0px 0px 10px #eeeeeed1;
          border-radius: 5px;
          padding: 10px 20px;
        "
      >
      <div class="d-flex justify-content-between">
      <div style="font-size: 14px; font-weight: 500">${formattedDate}</div>
      <div style="color: #808A9D; font-size: 13px">${dateStr}</div>
      </div>
      <div class="my-1">
      <div class="d-flex align-items-center" style="margin:0px">   
            <div class=${
              price > 26.84 ? "circle2" : "circle"
            } style="margin:0px"></div>
            <div class="mx-2">
              <span style="color: #808A9D; font-size: 13px">Price:</span>
              <span
                class="px-1"
                style="font-size: 14px; font-weight: 500" 
              >
              $${Math.round(price * 1000000) / 1000}
              </span>      
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center" style="margin: 0px">
          <div class="align-self-start">
              <i class="fa-solid fa-square-caret-down" style="color: #808A9D; font-size: 13px"></i>
          </div>
          <div class="mx-2">
              <span style="color: #808A9D; font-size: 13px">Vol 24h:</span>
              <span
                class="px-1"
                style="font-size: 14px; font-weight: 500"
              >
                $17.49B
          </span>
          
          </div>
          </div>
        </div>
      </div>`;

        const coordinate = baselineSeries.priceToCoordinate(price);
        // let shiftedCoordinate = param.point.x - 50;
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

    chart.timeScale().fitContent();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    colors.backgroundColor,
    backgroundColor,
    timeInterval,
    // lineColor,
    colors.textColor,
    // areaTopColor,
    // areaBottomColor,
    // prices
  ]);

  return (
    <>
      <div className="chartComponent" style={{position:"relative"}}>
        <div ref={chartContainerRef}></div>
      </div>
      {/* <div ref={chartContainerRef} id="container"/> */}
    </>
  );
};
