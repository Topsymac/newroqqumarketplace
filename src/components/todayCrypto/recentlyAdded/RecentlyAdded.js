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
      <div>
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
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-baseline">
              <div>
                <img src={AddIcon} alt="AddIcon" id="AddIcon" />
              </div>
              <div className="mx-3">
                <b style={{ fontWeight: "bold", fontSize: "17px" }}>
                  <Text text="Recently Added" />
                </b>
                {/* <p>Recently Added</p> */}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                <Link
                  className="d-flex align-items-center"
                  to="recently-added-coin"
                  style={{ textDecoration: "none" }}
                  state={{ id: "5" }}
                >
                  <Text text="More" />
                  <i
                    className="fa fa-angle-right mx-2"
                    aria-hidden="true"
                    style={{ fontWeight: "bold", fontSize: "12px" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
          <div>
            {allToken.splice(3, 3).map((token, index) => (
              <div
                key={token.id}
                className="d-flex justify-content-between mx-2"
                style={{ fontSize: "14px" }}
              >
                <div>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <span className="text-secondary">{index + 1}</span>
                    </li>
                    <li style={{ marginLeft: "22px" }}>
                      <img
                        src={`https://roqqu.com/static/media/tokens/${token.symbol}.png`}
                        alt=""
                        height="15"
                        width="15"
                        style={{ verticalAlign: "top !important" }}
                      />
                    </li>
                    <li className="mx-2">
                      <b>{token.name}</b>
                    </li>
                    <li
                      className="mx-2 text-secondary"
                      style={{ textTransform: "uppercase" }}
                    >
                      {token.symbol}
                    </li>
                  </ul>
                </div>
                <div>
                  {/* ${prices[token.symbol].price} */}$
                  {Math.round(prices[token.symbol].price * 10000) / 1000000}
                  {/* {price} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
