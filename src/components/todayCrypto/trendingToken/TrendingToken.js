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
        <div className="d-flex justify-content-between align-items-center mb-3 trendingCard">
          <div className="d-flex align-items-baseline trendinggIcon">
            <div id="trendingIcon">
              <img src={TrendingIcon} alt="TrendingIcon" id="trendingIcon" />
            </div>
            <div className="mx-3">
              <b style={{ fontWeight: "bold", fontSize: "17px" }}>
                <Text text="Trending" />
              </b>
              {/* <p>Trending</p> */}
            </div>
          </div>
          <div style={{ fontWeight: "bold", fontSize: "12px" }}>
            <Link
              className="d-flex align-items-center "
              to="trending-cryptocurrency"
              style={{ textDecoration: "none" }}
              state={{ id: "3" }}
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
        <div>
          {trendingAllToken.splice(1, 3).map((trendingToken, index) => (
            <div
              key={trendingToken.id}
              className="d-flex justify-content-between align-items-center mx-2"
              style={{
                fontSize: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "5px",
              }}
            >
              <div
                style={{
                  paddingLeft: "-35px",
                  marginLeft: "-35px",
                }}
              >
                <ul
                  className="list-unstyled d-flex"
                  style={{ listStyle: "none", display: "flex", gap: "15px" }}
                >
                  <li>
                    <span className="text-secondary">{index + 1}</span>
                  </li>
                  <li>
                    <img
                      src={`https://roqqu.com/static/media/tokens/${trendingToken.symbol}.png`}
                      alt=""
                      height="15"
                      width="15"
                    />
                  </li>
                  <li className="mx-2">
                    <b>{trendingToken.name}</b>
                  </li>
                  <li
                    className="mx-2 text-secondary"
                    style={{ textTransform: "uppercase", color: "grey" }}
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
                          <div className="text-danger">
                            <IoMdArrowDropdown color="red" fontSize="20px" />
                            {`${change}%`}
                          </div>
                        ) : (
                          <div
                            style={{
                              color: "#16c784",
                            }}
                          >
                            <IoMdArrowDropup color="#16c784" fontSize="20px" />
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
