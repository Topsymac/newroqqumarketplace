import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ChartComponent } from "./ChartComponent";
import LightweightMolecule from "./lightweight molecule/LightweightMolecule";
import CommunityComponent from "../community component/CommunityComponent";
import { formatDate } from "../../utilis/FormatDate";
// import Text from ""

import { ThemeContext } from "../../context/ThemeContext";

import "./chartapicomponent.css";
import Converter from "../Converter/Converter";

const ChartApiComponent = (props) => {
  const location = useLocation();
  const coinDataSymbol = location.state.coinData.symbol;

  const [prices, setPrices] = useState([]);
  const [timeInterval, setTimeInterval] = useState("1H");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(timeInterval);
        const response = await fetch(
          `https://api.roqqu.com/v2/history?symbol=${coinDataSymbol}&interval=${timeInterval}`
        );
        const json = await response.json();
        const eachPrice = json.data;
        const allPrices = eachPrice.map((singlePrice) => {
          const date = new Date(singlePrice.created_at);
          // console.log({ dateTime: date.getTime() });
          // const timestamp =
          //   timeInterval === "1H" ? date.getTime() / 1000 : date.getTime();
          // const
          // const value =
          //   singlePrice.price > 1000
          //     ? parseFloat(singlePrice.price) / 1000
          //     : parseFloat(singlePrice.price);
          const value = parseFloat(singlePrice.price);

          // console.log(value)
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

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="chartApiComponent"
        id="chartApiComponent"
        style={{ backgroundColor: theme === "Dark" ? "#161722" : "white" }}
      >
        <div className="chartApiComponent__chart">
          <div>
            <p
              style={{
                color: theme === "Dark" ? "white" : "",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {`${
                location.state.coinData
                  ? location.state.coinData.name
                  : "bitcoin"
              }`}{" "}
              to USD Chart
            </p>
            {/* <Text text="Bitcoin to USD Chart"/> */}
            <div>
              <div className="chartApiComponent__lightweight-molecule">
                <LightweightMolecule
                  onClickProp={(par) => {
                    setTimeInterval(par);
                  }}
                />
              </div>
            </div>
            <div>
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
              <div> <Converter/> </div>
            </div>
          </div>
        </div>
        <div className="chartApiComponent__communityComponent">
          <CommunityComponent />
        </div>
      </div>
    </>
  );
};

export default ChartApiComponent;
