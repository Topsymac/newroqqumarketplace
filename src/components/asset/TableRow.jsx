import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import bitcoin from "../../Images/bitcoin.png";
import "./Asset.css";
import Chart from "./Chart";
import { AiOutlineStar } from "react-icons/ai";
import { ThemeContext } from "../../context/ThemeContext";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
// import { IoEllipsisVertical } from "react-icons/io5";

const TableRow = ({ name, symbol, price, data }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [watchlisted, setWatchlisted] = useState(false);
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

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = name.slice(firstPostIndex, lastPostIndex);
  // console.log(currentPosts);
  // console.log(change);

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
    <tr
      className="tableRow"
      style={{
        backgroundColor:
          isHover && theme === "Light"
            ? "rgb(248,250,253)"
            : isHover && theme === "Dark"
            ? "rgb(25,30,42)"
            : "",
        borderBottomColor: theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td className="head">
        <div onClick={() => setWatchlisted(!watchlisted)}>
          {watchlisted ? <AiFillStar className="gold" /> : <AiOutlineStar />}
        </div>
      </td>
      <td className="head"></td>
      <td
        className="name"
        onClick={() => {
          navigate("/details", { state: { coinData: data, price: price } });
        }}
      >
        <div className="name-wrap">
          <img
            src={`https://roqqu.com/static/media/tokens/${symbol}.png`}
            alt=""
            width={"25px"}
          />
          <p
            className="coins"
            style={{
              color: theme === "Light" ? "black" : "white",
            }}
          >
            {name} <span> {symbol}</span>
          </p>
        </div>
      </td>
      <td
        className="price"
        onClick={() => {
          navigate("/details", { state: { coinData: data, price: price } });
        }}
      >{`$${price}`}</td>
      <td>
        <div
          className="change"
          style={{
            color: change >= 0 ? "#16c784" : "red",
          }}
        >
          {change < 0 ? (
            <IoMdArrowDropdown color="red" fontSize="20px" />
          ) : (
            <IoMdArrowDropup color="#16c784" fontSize="20px" />
          )}

          {`${formatSign(change)}%`}
        </div>
      </td>
      <td className="changes">
        <div
          className="change"
          style={{
            color: change >= 0 ? "#16c784" : "red",
          }}
        >
          {change < 0 ? (
            <IoMdArrowDropdown color="red" fontSize="20px" />
          ) : (
            <IoMdArrowDropup color="#16c784" fontSize="20px" />
          )}

          {`${formatSign(changeSeven)}%`}
        </div>
      </td>
      <td className="changes">
        <div
          className="change"
          style={{
            color: change >= 0 ? "#16c784" : "red",
          }}
        >
          {change < 0 ? (
            <IoMdArrowDropdown color="red" fontSize="20px" />
          ) : (
            <IoMdArrowDropup color="#16c784" fontSize="20px" />
          )}

          {`${formatSign(twentyFour)}%`}
        </div>
      </td>
      <td className="changes">$528,403,825,946</td>
      <td
        className="changer"
        onClick={() => {
          navigate("/details", { state: { coinData: data, price: price } });
        }}
      >
        $208,648,137,656
        <span style={{ textAlign: "end", marginRight: "5px" }}>70,345 BTC</span>
      </td>
      <td className="changers">
        19,352,668 BTC
        {symbol === "btc" ? (
          <span>
            <p className="progress">
              <p className="progressBar"></p>
            </p>
          </span>
        ) : (
          ""
        )}
        
      </td>
      <td
        className="buys"
        onClick={() => {
          navigate("/details", { state: { coinData: data, price: price } });
        }}
      >
        <Chart symbol={symbol} change={change} />
      </td>
      <td className="dropMenu">
        <div
          className="drop-icon"
          onClick={() => setShowDropDown((showDropDown) => !showDropDown)}
        >
          <FaEllipsisV />
        </div>
        {showDropDown && (
          <div
            className="dropDown-items"
            style={{
              backgroundColor:
                theme === "Light" ? "rgb(245,250,255)" : "rgb(30,35,45)",
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <p>View Charts</p>
            <p>View Markets</p>
            <p>View Historical Data</p>
          </div>
        )}
      </td>
      {/* <td>
        <IoEllipsisVertical />
      </td> */}
    </tr>

    // Mobile table
  );
};

export default TableRow;
