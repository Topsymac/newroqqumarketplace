import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import bitcoin from "../../Images/bitcoin.png";
// import "../asset/Asset.css";
// import "./Asset.css";
import "./trendingtablerow.css";
import { AiOutlineStar } from "react-icons/ai";
import { ThemeContext } from "../../context/ThemeContext";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import TrendingChart from "./TrendingChart";

const TrendingTableRow = ({
  index,
  name,
  symbol,
  price,
  data,
  percentageChange,
  chart,
  blockchain,
  added,
  twentyFourData,
}) => {
  const { theme } = useContext(ThemeContext);
  const [change, setChange] = useState(0);
  const [changeSeven, setChangeSeven] = useState(0);
  const [twentyFour, setTwentyFour] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);
  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);
  // console.log(isHover);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  //   console.log(percentageChange);
  // console.log(index)
  useEffect(() => {
    setChange(percentageChange);
    fetch(
      `https://staging.roqqu.com/v2/history?symbol=${symbol}&interval=1H`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const priceHistory = data.data;
        const finalPrice = priceHistory[0].price;
        const initialPrice = priceHistory[priceHistory.length - 1].price;
        const percentageChange =
          ((finalPrice - initialPrice) / initialPrice) * 100;
        const roundPercentage = Math.round(percentageChange * 100) / 100;
        setChange(roundPercentage);
      })

    //   .catch((err) => console.log(err.message));
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
        setChangeSeven(roundSevenPercentage);
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
        setTwentyFour(roundPercentage);
      })

      .catch((err) => console.log(err.message));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        className=""
        style={{
          backgroundColor:
            isHover && theme === "Light"
              ? "#F8FAFD"
              : isHover && theme === "Dark"
              ? "#171924"
              : "",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          navigate("/details", { state: { coinData: data, price: price } });
        }}
      >
        <hr
          style={{
            color: theme === "Light" ? "#c2c2c2" : "#1F212B",
            margin: "0px",
          }}
        />

        <ul
          className="list-unstyled d-flex align-items-center"
          style={{ margin: "0px", width: "100%", padding: "20px 0px" }}
        >
          <div className="d-flex justify-content-between">
            <li className="head">
              <AiOutlineStar />
            </li>
            {/* <li className="head"></li> */}
            <li style={{ paddingLeft: "20px" }}>{index + 1}</li>
            <li
              className="name w-100"
              style={{
                whiteSpace: "nowrap",
                paddingLeft: "32px",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              {/* <img src={bitcoin} alt="" width={"25px"} /> */}
              {name}
            </li>
            <li
              style={{
                color: "#5d6b82",
                paddingLeft: "10%",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {symbol}
            </li>
          </div>
          {/*  */}
          <div className="secondDiv">
            <li className="price">{`$${price}`}</li>
            {/* 1H */}
            <li className="changes-0">
              {/* <div className="change"> */}
              {change < 0 ? (
                <IoMdArrowDropdown color="red" fontSize="20px" />
              ) : (
                <IoMdArrowDropup color="#16c784" fontSize="20px" />
              )}

              {`${change}%`}
              {/* </div> */}
            </li>
            {/* 2H */}
            <li className="changes-1">
              {/* <div className="change"> */}
              {change < 0 ? (
                <IoMdArrowDropdown color="red" fontSize="20px" />
              ) : (
                <IoMdArrowDropup color="#16c784" fontSize="20px" />
              )}

              {`${changeSeven}%`}
              {/* </div> */}
            </li>

            {/*7D  */}
            {twentyFourData ? (
              <li className="changes-2">
                {/* <div className="change"> */}
                {/* {change < 0 ? (
              <IoMdArrowDropdown color="red" fontSize="20px" />
            ) : (
              <IoMdArrowDropup color="#16c784" fontSize="20px" />
            )} */}
                `${twentyFour}%`
              </li>
            ) : (
              ""
            )}
            {/* </div> */}

            {/*  */}
            <li className="market">$528,403</li>
            <li className="volume">$20,648</li>
            {blockchain ? <li className="blockchain"> BNB</li> : ""}
            {added ? <li className="added"> 5 hours ago </li> : ""}
            {chart ? (
              <li className="buys">
                <TrendingChart symbol={symbol} change={change} />
              </li>
            ) : (
              ""
            )}
          </div>
        </ul>
        <hr
          style={{
            color: theme === "Light" ? "#c2c2c2" : "#1F212B",
            margin: "0px",
          }}
        />
      </div>
    </>
  );
};

export default TrendingTableRow;
