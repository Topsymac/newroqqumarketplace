import React, { useEffect, useState } from "react";
import { ChartComponent } from "./ChartComponent";
import LightweightMolecule from "./lightweight molecule/LightweightMolecule";
import CommunityComponent from "../community component/CommunityComponent";
import { formatDate } from "../../utilis/FormatDate";
// import Text from ""

import "./chartapicomponent.css";

const ChartApiComponent = (props) => {
  const [prices, setPrices] = useState([]);
  const [timeInterval, setTimeInterval] = useState("1H");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(timeInterval);
        const response = await fetch(
          `https://api.roqqu.com/v2/history?symbol=btc&interval=${timeInterval}`
        );
        const json = await response.json();
        const eachPrice = json.data;
        const allPrices = eachPrice.map((singlePrice) => {
          const date = new Date(singlePrice.created_at);
          // console.log({ dateTime: date.getTime() });
          // const timestamp =
          //   timeInterval === "1H" ? date.getTime() / 1000 : date.getTime();
          const value = parseFloat(singlePrice.price) / 1000;

          // const timestamp =
          //   timeInterval === "1H" && timeInterval === "1D"
          //     ? date.getTime()
          //     : date.getTime() / 1000;
          return { value, time: date.getTime() };
        });
        // // Sort the allPrices array by time
        // allPrices.sort((a, b) => a.time - b.time);
        setPrices(allPrices);
        // setPrices(json.prices);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [timeInterval]);

  // useEffect(() => {
  //   const divElement = document.getElementsByClassName("communityComponent")[0];
  //   const scrollThreshold = 200; // Define the scroll threshold in pixels

  //   window.onscroll = () => {
  //     let scrollTop = window.scrollY;
  //     let viewportHeight = window.innerHeight;
  //     let contentHeight = divElement.getBoundingClientRect().height;

  //     if (scrollTop >= 550) {
  //       divElement.style.position = "fixed";
  //       divElement.style.top = "0px";

  //     } else if (scrollTop <= 750) {
  //       divElement.style.position = "";
  //     }
  //   };
  // }, []);


  // const divElement1 = document.getElementById("chartApiComponent");

  // function handleScroll() {
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   // const distance = scrollTop - initialPosition;
  //   if (divElement) {
  //     if (
  //       scrollTop >= initialPosition - 10 &&
  //       scrollTop <= divElement.offsetTop - 10
  //     ) {
  //       divElement.classList.add("fixed-position");
  //     } else {
  //       divElement.classList.remove("fixed-position");
  //     }
  //   }
  // }

  // window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div
        className="d-flex flex-wrap justify-content-between align-items-start m-3 chartApiComponent"
        id="chartApiComponent"
      >
        <div className="chartApiComponent__chart">
          <div>
            <p style={{ fontWeight: "bold" }}>Bitcoin to USD Chart</p>
            {/* <Text text="Bitcoin to USD Chart"/> */}
            <div>
              <div className="my-3">
                <LightweightMolecule
                  onClickProp={(par) => {
                    setTimeInterval(par);
                  }}
                />
              </div>
            </div>
            <div>
              <ChartComponent
                {...props}
                data={prices}
                timeInterval={timeInterval}
                colors={{
                  backgroundColor: "transparent",
                  // lineColor = "rgba(197, 203, 206, 0.176)",
                  //   lineColor = "#16C784",
                  textColor: "black",
                  // areaTopColor = "white",
                  // areaBottomColor = "#16c7833e",
                  // lineWidth = 1,
                  //   areaTopColor = "#2962FF",
                  //   areaBottomColor = "rgba(41, 98, 255, 0.28)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="chartApiComponent__communityComponent"
          id="communityComponent"
        >
          <CommunityComponent />
        </div>
      </div>
    </>
  );
};

export default ChartApiComponent;
