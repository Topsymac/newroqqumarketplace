import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recentlyadded.css";
import Text from "../../../atoms/text/Text";
import AddIcon from "../../../Images/AddIcon.png";
import { ThemeContext } from "../../../context/ThemeContext";

const RecentlyAdded = () => {
  const [allToken, setAllToken] = useState([]);
  const [tokenPrice, setTokenPrice] = useState([]);
  // pure object
  useEffect(() => {
    fetch("https://staging.roqqu.com/v2/prices")
      .then((res) => res.json())
      .then((data) => {
        setTokenPrice(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   console.log(tokenPrice);

  const prices = tokenPrice.data;
  //   console.log(prices);
  // price = pricesResult[token.symbol].price

  //   console.log(tokenPrice.map(price=>price));
  //array of objects
  useEffect(() => {
    fetch("https://staging.roqqu.com/v2/all-tokens", {
      method: "GET",
      headers: {
        Origin: "http://localhost:3000", // Set the Origin header to the value of your web application's origin
      },
    })
      .then((res) => res.json())
      .then((data) => setAllToken(data.data))
      //   .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const { theme } = useContext(ThemeContext);

  //   console.log(allToken);
  return (
    <>
      {/* <div style={{width:"100%",border:"1px solid red"}}> */}
      <div
        className="RecentlyAdded"
        style={{
          backgroundColor: theme === "Light" ? "#FFF" : "#323546 ",
          boxShadow:
            theme === "Light"
              ? [
                  "rgba(88, 102, 126, 0.08) 0px 4px 24px",
                  "rgba(88, 102, 126, 0.12) 0px 1px 2px",
                ]
              : "",
        }}
      >
        <div className="RecentlyAdded__card">
          <div className="RecentlyAdded__header">
            <div>
              <img src={AddIcon} alt="AddIcon" id="AddIcon" />
            </div>
            <div className="RecentlyAdded__recently-text">
              <b style={{ fontWeight: "bold", fontSize: "16px" }}>
                <Text text="Recently Added" />
              </b>
              {/* <p>Recently Added</p> */}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "12px" }}>
              <Link
                className="RecentlyAdded__link"
                to="recently-added-coin"
                style={{ textDecoration: "none" }}
                state={{ id: "5" }}
              >
                <Text text="More" />
                <i
                  className="fa fa-angle-right RecentlyAdded__fa-angle-right"
                  aria-hidden="true"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
        <div>
          {allToken.slice(3, 6).map((token, index) => (
            <div key={token.id} className="RecentlyAdded__token">
              <div>
                <ul className="RecentlyAdded__list-div">
                  <li>
                    <span className="RecentlyAdded__index">{index + 1}</span>
                  </li>
                  <li style={{ marginLeft: "22px" }}>
                    <img
                      src={`https://roqqu.com/static/media/tokens/${token.symbol}.png`}
                      alt=""
                      height="16"
                      width="16"
                    />
                  </li>
                  <li className="RecentlyAdded__token-name">
                    <b>{token.name}</b>
                  </li>
                  <li
                    className="text-secondary"
                    style={{
                      textTransform: "uppercase",
                      marginLeft: "10px",
                      color: "#A6B0C3",
                      fontSize: "12px",
                    }}
                  >
                    {token.symbol}
                  </li>
                </ul>
              </div>
              <div className="RecentlyAdded__pricesToken">
                {/* ${prices[token.symbol].price} */}$
                {Math.round(prices[token.symbol].price * 10000) / 1000000}
                {/* {price} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RecentlyAdded;
