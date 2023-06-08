import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
// import bitcoin from "../../Images/bitcoin.png";

import USD from "../../Images/USD.svg";
import { RiArrowLeftRightFill } from "react-icons/ri";
import "./Converter.css";
import { ThemeContext } from "../../context/ThemeContext";

const Converter = () => {
  const tokenContainer = useRef();
  const fiatContainer = useRef();

  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const [tokenInputValue, setTokenInputValue] = useState(1);
  const [fiatInputValue, setFiatInputValue] = useState(1);
  const [fiatBaseEquivalent, setFiatBaseEquivalent] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    // setTokenInputValue(tokenInputValue);
    // setFiatInputValue(28000 * tokenInputValue);
    // setFiatInputValue(23000 * tokenInputValue);
    // if (tokenContainer.current) {
    //   if (tokenContainer.current.value !== tokenInputValue) {
    //     // setFiatInputValue(28000 * tokenInputValue);
    //   }
    // }
    // if (fiatContainer.current) {
    //   if (fiatContainer.current.value !== fiatInputValue) {
    //     // setTokenInputValue(28000 / tokenInputValue);
    //     console.log("hahaha");
    //   }
    // }

    // if (tokenContainer.current.value !== tokenInputValue) {
    //   setFiatInputValue(28000 * tokenInputValue);
    // } else if (fiatContainer.current.value !== fiatInputValue) {
    //   setTokenInputValue(28000 / tokenInputValue);
    //   console.log("hahaha");
    // }
    // if (fiatContainer.current.value !== tokenInputValue) {
    //   //  setTokenInputValue(tokenInputValue);
    // }
    if (location.state) {
      // console.log("state data", location.state);
      setData(location.state);
      setFiatBaseEquivalent(location.state.price);
      setFiatInputValue(location.state.price.toFixed(2));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("fiat price", fiatInputValue);
  return (
    <div
      className="main-converter-container"
      style={{
        backgroundColor: theme === "Light" ? "#FFF" : "",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <div
        className="converter-container"
        style={{
          color: theme === "Light" ? "black" : "#ffffff",
        }}
      >
        <div>
          <div>
            <h3>
              {data.coinData ? data.coinData.name : "bitcoin"} to USD converter
            </h3>
          </div>
        </div>
        <div
          className={`${toggle && "convert-row-reverse"} converts`}
          style={{
            border:
              theme === "Light" ? "1px solid #EFF2F5" : "1px solid #222531",
            backgroundColor: theme === "Light" ? "#FFF" : "#171924",
          }}
        >
          <div className="bitcoin-converter">
            <div className="img-container">
              <img
                src={`https://roqqu.com/static/media/tokens/${
                  data.coinData ? data.coinData.symbol : "btc"
                }.png`}
                alt="bitcoin"
                className="converter-btc"
              />
              <div className="bitcoin-converter-one">
                <p className="btc-converter">
                  {data.coinData ? data.coinData.symbol : "btc"}
                </p>
                <p className="converter-bitcoin">
                  {data.coinData ? data.coinData.name : "bitcoin"}
                </p>
              </div>
            </div>
            <input
              ref={tokenContainer}
              value={tokenInputValue}
              type="number"
              className="converter-input"
              style={{
                color: theme === "Light" ? "black" : "#ffffff",
              }}
              onChange={(e) => {
                setTokenInputValue(e.target.value);
                setFiatInputValue(
                  (e.target.value * fiatBaseEquivalent).toFixed(2)
                );
              }}
            />
          </div>
          <div
            className="bitcoin-converter grey"
            style={{
              color: theme === "Light" ? "black" : "#ffff",
              background: theme === "Light" ? "#F8FAFD" : "#232531",
            }}
          >
            <div className="img-container">
              <img src={USD} alt="usd" className="converter-btc" />
              <div className="bitcoin-converter-one">
                <p
                  className="btc-converter"
                  style={
                    {
                      // color: theme === "Light" ? "black" : "black",
                    }
                  }
                >
                  USD
                </p>
                <p className="converter-bitcoin">United States Dollar </p>
              </div>
            </div>
            {/* <span className="">{fiatInputValue}</span> */}
            <input
              ref={fiatContainer}
              value={fiatInputValue}
              type="number"
              className="converter-input"
              style={{
                color: theme === "Light" ? "rgb(34, 37, 49)" : "#ffffff",
              }}
              // onChange={(e) => setFiatInputValue(e.target.value)}
              onChange={(e) => {
                setFiatInputValue(e.target.value);
                setTokenInputValue(
                  (e.target.value / fiatBaseEquivalent).toFixed(2)
                );
              }}
            />
          </div>
          <span
            className="arrow-left-right"
            style={{
              backgroundColor:
                theme === "Light" ? "#F8FAFD" : "rgb(248 250 253)",
            }}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <RiArrowLeftRightFill />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Converter;
