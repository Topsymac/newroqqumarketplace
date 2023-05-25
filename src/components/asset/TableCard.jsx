import React, { useContext, useEffect, useState } from "react";

// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";
import { TbArrowUpRight, TbArrowDownRight } from "react-icons/tb";
import "./Asset.css";
import Chart from "./Chart";

const TableCard = ({ name, symbol, price, data }) => {
  const { theme } = useContext(ThemeContext);
  const [change, setChange] = useState(0);
  const [changeSeven, setChangeSeven] = useState(0);
  const [twentyFour, setTwentyFour] = useState(0);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);
  const navigate = useNavigate();

  //   const [isHover, setIsHover] = useState(false);
  // console.log(isHover);

  //   const handleMouseEnter = () => {
  //     setIsHover(true);
  //   };
  //   const handleMouseLeave = () => {
  //     setIsHover(false);
  //   };

  useEffect(() => {
    fetch(`https://staging.roqqu.com/v2/history?symbol=${symbol}&interval=1H`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const priceHistory = data.data;
        const finalPrice = priceHistory[0].price;
        const initialPrice = priceHistory[priceHistory.length - 1].price;
        const percentageChange =
          ((finalPrice - initialPrice) / initialPrice) * 100;
        const roundPercentage = Math.round(percentageChange * 100) / 100;
        const decimalPlace = roundPercentage.toFixed(2);
        setChange(decimalPlace);
      })

      .catch((err) => console.log(err.message));
    fetch(`https://staging.roqqu.com/v2/history?symbol=${symbol}&interval=1D`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        const priceSevenHistory = data.data;
        const finalSevenPrice = priceSevenHistory[0].price;
        const initialSevenPrice =
          priceSevenHistory[priceSevenHistory.length - 1].price;

        const percentageChange =
          ((finalSevenPrice - initialSevenPrice) / initialSevenPrice) * 100;
        const roundSevenPercentage = Math.round(percentageChange * 100) / 100;
        const decimalSeven = roundSevenPercentage.toFixed(2);
        setChangeSeven(decimalSeven);
      })

      .catch((err) => console.log(err.message));
    fetch(`https://staging.roqqu.com/v2/history?symbol=${symbol}&interval=1W`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const priceHistory = data.data;
        const finalPrice = priceHistory[0].price;
        const initialPrice = priceHistory[priceHistory.length - 1].price;
        const percentageChange =
          ((finalPrice - initialPrice) / initialPrice) * 100;
        const roundPercentage = Math.round(percentageChange * 100) / 100;
        const decimalPlace = roundPercentage.toFixed(2);
        setTwentyFour(decimalPlace);
      })

      .catch((err) => console.log(err.message));

    // eslint-disable-next-line
  }, []);

  const formatSign = (num) => {
    let value = num.toString();
    if (value >= 0) {
      return value;
    } else {
      value = value.split("-").join("");
      // value = value.replace("-", "");
      return value;
    }
  };

  return (
    <div
      className="mobileTable"
      style={{
        backgroundColor:
          theme === "Light" ? "rgb(245,250,255)" : "rgb(30,35,45)",
        color: theme === "Light" ? "black" : "white",
      }}
      onClick={() => {
        navigate("/details", { state: { coinData: data, price: price } });
      }}
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
    >
      <div className="mobileContainer">
        <div
          className="topMobile"
          style={{
            borderBottomColor: theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
          }}
        >
          <div className="leftTopMobile">
            <div>
              <img
                src={`https://roqqu.com/static/media/tokens/${symbol}.png`}
                alt=""
                width={"25px"}
              />
            </div>
            <div className="">
              {name} <span className="span"> {symbol}</span>
            </div>
            <div>
              <b>{`$${price}`}</b>
            </div>
          </div>
          <div className="rightTopMobile">
            <div>
              <AiOutlineStar />
            </div>
            <div>
              <button className="mobilebutton">Buy</button>
            </div>
          </div>
        </div>
        <div
          className="middleMobile"
          style={{
            borderBottomColor: theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
          }}
        >
          <div
            className="leftMiddleMobile"
            style={{
              borderRightColor: theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
            }}
          >
            <div className="leftLeft">
              <p>Rank</p>
              <p>Volume(24hrs)</p>
              <p>Circulating Supply</p>
            </div>
            <div className="rightRight">
              <p>#1</p>
              <p>471,365 BTC</p>
              <p>19,435,887 BTC</p>
            </div>
          </div>
          <div className="rightMiddleMobile">
            <div className="mobileChart">
              <Chart symbol={symbol} change={change} />
            </div>
            <div>Last 7 days</div>
          </div>
        </div>
        <div
          className="centerMobile"
          style={{
            borderBottomColor: theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
          }}
        >
          <div className="hour">
            <p>1 hr change</p>
            <div
              className="hourParagraph"
              style={{
                color: change >= 0 ? "#16c784" : "red",
              }}
            >
              <div>{`${formatSign(change)}%`}</div>

              <div>
                {change < 0 ? (
                  <TbArrowDownRight color="red" fontSize="20px" />
                ) : (
                  <TbArrowUpRight color="#16c784" fontSize="20px" />
                )}
              </div>
            </div>
          </div>
          <div className="hour">
            <p>24 hrs change</p>
            <div
              className="hourParagraph"
              style={{
                color: change >= 0 ? "#16c784" : "red",
              }}
            >
              <div>{`${formatSign(twentyFour)}%`}</div>
              <div>
                {change < 0 ? (
                  <TbArrowDownRight color="red" fontSize="20px" />
                ) : (
                  <TbArrowUpRight color="#16c784" fontSize="20px" />
                )}
              </div>
            </div>
          </div>
          <div className="hour">
            <p>7 days change</p>
            <div
              className="hourParagraph"
              style={{
                color: change >= 0 ? "#16c784" : "red",
              }}
            >
              <div>{`${formatSign(changeSeven)}%`}</div>
              <div>
                {change < 0 ? (
                  <TbArrowDownRight color="red" fontSize="20px" />
                ) : (
                  <TbArrowUpRight color="#16c784" fontSize="20px" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bottomMobile">
          <h4>See coin details</h4>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
