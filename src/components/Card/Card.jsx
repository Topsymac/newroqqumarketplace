import React, { useEffect, useContext } from "react";
// import bitcoin from "../../Images/bitcoin.png";
// import {SiEthereum} from "react/icons/si";
import { ThemeContext } from "../../context/ThemeContext";
import Chart from "../asset/Chart";
import "./Card.css";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";

// import { BsBoxArrowUpRight } from "react-icons/bs";
// import eth from "../../Images/ETH2.png";
// import dash from "../../Images/Dash.png";
// import xrp from "../../Images/xrp.png";
// import doge from "../../Images/doge.png";
// import bnb from "../../Images/BNB.png";

const Card = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {}, []);

  // const symbols = ["btc", "eth", "dash", "xrp", "bnb", "doge",]
  const symbols = [
    {
      symbol: "btc",
      // img: bitcoin,
      name: "Bitcoin",
      price: "$27,000",
      change: 0.03,
    },
    {
      symbol: "eth",
      // img: eth,
      name: "Ethereum",
      price: "$1,903",
      change: 0.12,
    },
    {
      symbol: "dash",
      // img: dash,
      name: "Dash",
      price: "$48.90",
      change: -0.02,
    },
    {
      symbol: "xrp",
      // img: xrp,
      name: "Ripple",
      price: "$0.4609",
      change: -0.07,
    },
    {
      symbol: "bnb",
      // img: bnb,
      name: "Binance Coin",
      price: "$326.16",
      change: 0.04,
    },
    {
      symbol: "doge",
      // img: doge,
      name: "Doge",
      price: "$0.07926",
      change: 0.06,
    },
  ];

  return (
    <div
      className="card-container"
      style={{
        backgroundColor: theme === "Light" ? "#FFF" : "hsl(235, 21%, 11%)",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <div>
        <h2>People Also Watch</h2>
        <div className="sub-card-container">
          {symbols.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="card"
                  style={{
                    backgroundColor: theme === "Light" ? "#FFF" : "#222531",
                    color: theme === "Light" ? "black" : "white",
                  }}
                >
                  <div className="card-top">
                    <img
                      src={`https://roqqu.com/static/media/tokens/${item.symbol}.png`}
                      alt="new"
                      className="card-token-img"
                    />
                    <div className="card-token">
                      <p className="card-item-name">{item.name}</p>
                      <h5>{item.price}</h5>
                      <div
                        className={`${
                          item.change > 0 ? "green" : "red"
                        } card-percentages `}
                      >
                        <span>
                          {item.change > 0 ? (
                            <MdArrowDropUp className="chevron-up" />
                          ) : (
                            <MdArrowDropDown className="chevron-down" />
                          )}
                        </span>
                        <p className="change">{item.change}%</p>
                      </div>
                    </div>
                  </div>
                  <div className="chart-container">
                    <Chart symbol={item.symbol} change={item.change} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div>
            <div className="card">
              {" "}
              <Chart />
            </div>
          </div>

          <div >
            <div className="card">
              {" "}
              <Chart />
            </div>
          </div>


          <div >
            <div className="card">
              {" "}
              <Chart />
            </div>

          </div>

          <div >
            <div className="card">
              {" "}
              <Chart />
            </div>
          </div>

          <div >
            <div className="card">
              <div className="chart-button">
                <button className="chart-button-sub"></button>
              </div>
              <Chart />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
