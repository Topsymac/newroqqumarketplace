import React, { useContext, useEffect, useState } from "react";
import "./trendingtoken.css";
import { Link } from "react-router-dom";
import Text from "../../../atoms/text/Text";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import TrendingIcon from "../../../Images/TrendingIcon.png";
import { ThemeContext } from "../../../context/ThemeContext";

const TrendingToken = () => {
  const [trendingAllToken, setTrendingAllToken] = useState([]);
  // const [change, setChange] = useState(0);

  // useEffect(() => {
  //   fetch("https://staging.roqqu.com/v2/all-tokens")
  //     .then((res) => res.json())
  //     .then((data) => setTrendingAllToken(data.data))
  //     .catch((err) => console.log(err));
  //   // console.log(trendingAllToken);
  // }, []);

  // function calculateChange(priceHistory) {
  //   try {
  //     const finalPrice = priceHistory[0].price;
  //     const initialPrice = priceHistory[priceHistory.length - 1].price;
  //     const percentageChange =
  //       ((finalPrice - initialPrice) / initialPrice) * 100;
  //     const roundPercentage = Math.round(percentageChange * 100) / 100;
  //     return roundPercentage;
  //   } catch (error) {
  //     console.log(error);
  //     return 0;
  //   }
  // }
  // useEffect(() => {
  //   trendingAllToken.forEach((token) => {
  //     fetch(
  //       `https://staging.roqqu.com/v2/history?symbol=${token.symbol}&interval=1H`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const priceHistory = data.data;
  //         const finalPrice = priceHistory[0].price;
  //         const initialPrice = priceHistory[priceHistory.length - 1].price;
  //         const percentageChange =
  //           ((finalPrice - initialPrice) / initialPrice) * 100;
  //         const roundPercentage = Math.round(percentageChange * 100) / 100;
  //         setChange(roundPercentage);
  //       });
  //   });
  // }, []);

  // console.log(change)
  useEffect(() => {
    fetch("https://staging.roqqu.com/v2/all-tokens")
      .then((res) => res.json())
      .then(async (data) => {
        // Fetch price history data for each token
        const tokensWithHistory = await Promise.all(
          data.data.map((token) =>
            fetch(
              `https://staging.roqqu.com/v2/history?symbol=${token.symbol}&interval=1H`
            ).then((response) => response.json())
          )
        );

        // const coinImg = await Promise.all(
        //   data.data.map((token) =>
        //     fetch(`https://roqqu.com/static/media/tokens/${token.symbol}.png`).then(
        //       (response) => response.json())
        //     )
        //   )
        // console.log(coinImg)
        // Add price history data to token objects
        const tokensWithData = data.data.map((token, index) => ({
          ...token,
          // coinImg: coinImg[index],
          priceHistory: tokensWithHistory[index].data,
        }));

        setTrendingAllToken(tokensWithData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, []);

  function calculateChange(priceHistory) {
    try {
      const finalPrice = priceHistory[0].price;
      const initialPrice = priceHistory[priceHistory.length - 1].price;
      const percentageChange =
        ((finalPrice - initialPrice) / initialPrice) * 100;
      const roundPercentage = Math.round(percentageChange * 100) / 100;
      return roundPercentage;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="trendingToken"
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
        <div className="trendingToken__card">
          <div className="trendingToken__header">
            <div id="trendingIcon">
              <img src={TrendingIcon} alt="TrendingIcon" id="trendingIcon" />
            </div>
            <div className="trendingToken__trending-text">
              <b>
                <Text text="Trending" />
              </b>
              {/* <p>Trending</p> */}
            </div>
          </div>
          <div>
            <Link
              className="trendingToken__link"
              to="trending-cryptocurrency"
              state={{ id: "3" }}
            >
              <Text text="More" />
              <i
                className="fa fa-angle-right trendingToken__fa-angle-right"
                aria-hidden="true"
                style={{ fontWeight: "bold", fontSize: "12px" }}
              ></i>
            </Link>
          </div>
        </div>
        <div>
          {trendingAllToken.slice(4, 7).map((trendingToken, index) => (
            <div key={trendingToken.id} className="trendingToken__token">
              <div>
                <ul className="trendingToken__list-div">
                  <li>
                    <span className=" trendingToken__index">{index + 1}</span>
                  </li>
                  <li style={{ marginLeft: "22px" }}>
                    <img
                      src={`https://roqqu.com/static/media/tokens/${trendingToken.symbol}.png`}
                      alt=""
                      height="16"
                      width="16"
                      className="trendingToken__img"
                    />
                  </li>
                  <li className="trendingToken__token-name">
                    <b>{trendingToken.name}</b>
                  </li>
                  <li
                    className=""
                    style={{
                      textTransform: "uppercase",
                      marginLeft: "10px",
                      color: "#A6B0C3",
                      fontSize:"12px"
                    }}
                  >
                    {trendingToken.symbol}
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  {(() => {
                    const change = calculateChange(trendingToken.priceHistory);
                    return (
                      <>
                        {change < 0 ? (
                          <div style={{ color: "red",fontSize:"12px" }}>
                            <IoMdArrowDropdown
                              color="red"
                              fontSize="20px"
                              className="trendingToken__tokenCaret"
                            />
                            {`${change}%`}
                          </div>
                        ) : (
                          <div style={{ color: "#16c784",fontSize:"12px" }}>
                            <IoMdArrowDropup
                              color="#16c784"
                              fontSize="20px"
                              className="trendingToken__tokenCaret"
                            />
                            {`${change}%`}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* {change < 0 ? (
                  <IoMdArrowDropdown color="red" fontSize="20px" />
                ) : (
                  <IoMdArrowDropup color="#16c784" fontSize="20px" />
                )}

                {`${change}%`} */}
                {/* {prices[token.symbol].price} */}
                {/* {Math.round(prices[token.symbol].price * 10000) / 1000000} */}

                {/* {price} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingToken;
