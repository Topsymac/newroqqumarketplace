// import React from 'react'

import React, { useState, useEffect, useContext } from "react";
import "./AssetDetails.css";
import { BiChevronRight } from "react-icons/bi";
// import bitcoin from "../../Images/bitcoin.png";
import { AiOutlineStar } from "react-icons/ai";
import { BsBoxArrowUp } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { IoMdArrowDropup, } from "react-icons/io";
// import { MdOutlineArrowRight } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { AiFillStar } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import {MdVerified} from "react-icons/md";



const AssetDetails = () => {
  const { theme } = useContext(ThemeContext);
  // const [color, setColor] = useState("red");
  const location = useLocation();
  const [data, setData] = useState({
    coinData: {
      created_at: "2021-05-13T13:47:34.000Z",
      fixed: 1,
      name: "Bitcoin",
      symbol: "btc",
    },
    price: 22860.058269,
  });
  const [data2, setData2] = useState({});
  const [watchlisted, setWatchlisted] = useState(false);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    fetch(
      `https://data.messari.io/api/v1/assets/${location.state.coinData.symbol}/metrics`
    )
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
        console.log("api data", data);
      });
    if (location.state) {
      console.log("state data", location.state);
      setData(location.state);
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: theme === "Light" ? "#FFF" : "",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <div className="left-container">
        <div className="left-container-breadcrumb">
          <div className="breadcrumb">
            <p className="cryptocurrencies">cryptocurencies</p>
            <BiChevronRight />
            <p className="coins">Coins</p>
            <BiChevronRight />
            <p
              className="breadcrumb-bitcoin"
              style={{
                color: theme === "Light" ? "black" : "#ffffff",
              }}
            >
              Bitcoin
            </p>
          </div>
        </div>

        <div className="bitcoin-asset">
          <img
            src={`https://roqqu.com/static/media/tokens/${
              data.coinData ? data.coinData.symbol : "btc"
            }.png`}
            alt="bitcoin"
            className="bitcoin-logo"
          />

          <p className="bitcoin">
            {data.coinData ? data.coinData.name : "BTC"}
          </p>

          <div>
            <p
              className="btc"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
            >
              {data.coinData ? data.coinData.symbol : "btc"}
            </p>
          </div>
          <div className="assetz-notification">
            <div className="asset-notification">
              <IoIosNotificationsOutline />
            </div>
            <div
              onClick={() => setWatchlisted(!watchlisted)}
              className="star-icon"
            >
              {watchlisted ? (
                <AiFillStar className="gold" />
              ) : (
                <AiOutlineStar />
              )}
            </div>

            <div className="arrow-up-icon">
              <BsBoxArrowUp />
            </div>
          </div>

          <div>
            <button className="follow-icon">
              {" "}
              <BsPlus />
              Follow
            </button>
          </div>
        </div>

        <div className="rank-section">
          <div
            className="rank"
            style={{
              backgroundColor: theme === "Light" ? "#808a9d" : "#333546",
              color: theme === "Light" ? "black" : "#ffffff",
            }}
          >
            Rank #1
          </div>
          <div
            className="coin"
            style={{
              backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
              color: theme === "Light" ? "black" : "#ffffff",
            }}
          >
            Coin
          </div>
          <div
            className="watchlist"
            style={{
              backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
              color: theme === "Light" ? "black" : "#ffffff",
            }}
          >
            On 3,948,494 watchlists
          </div>
        </div>
        <div className="main-source-code-section">
          <div className="source-code-section">
            <div
              className="anchor-icon"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#848CA2";
                // e.currentTarget.style.color = theme === "Light"? "#ffffff":'#ffffff';
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme === "Light" ? "#f0f2f5" : "#333546";
                e.currentTarget.style.color =
                  theme === "Light" ? "#000000" : "#ffffff";
              }}
            >
              <HiLink />
              <p className="explorer">
                {data.coinData ? data.coinData.name : "BTC"}
              </p>
              <BsBoxArrowUpRight />
            </div>

            <div
              className="search-icon"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#848CA2";
                // e.currentTarget.style.color = theme === "Light"? "#ffffff":'#ffffff';
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme === "Light" ? "#f0f2f5" : "#333546";
                e.currentTarget.style.color =
                  theme === "Light" ? "#000000" : "#ffffff";
              }}
              // onMouseOut={style.color='green'}
            >
              <AiOutlineSearch />
              <p className="explorer">Explorers</p>
              <HiOutlineChevronDown />
            </div>

            <div
              className="person-icon"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#848CA2";
                // e.currentTarget.style.color = theme === "Light"? "#ffffff":'#ffffff';
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme === "Light" ? "#f0f2f5" : "#333546";
                e.currentTarget.style.color =
                  theme === "Light" ? "#000000" : "#ffffff";
              }}
            >
              <BsFillPersonFill />
              <p>Community</p>
              <HiOutlineChevronDown />
            </div>
          </div>

          <div className="whitepaper-section">
            <div
              className="whitepaper"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#848CA2";
                // e.currentTarget.style.color = theme === "Light"? "#ffffff":'#ffffff';
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme === "Light" ? "#f0f2f5" : "#333546";
                e.currentTarget.style.color =
                  theme === "Light" ? "#000000" : "#ffffff";
              }}
            >
              <BsCodeSlash />
              <p className="source-code-icon">Source code</p>
              <BsBoxArrowUpRight />
            </div>

            <div
              className="whitepaper-sub"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#848CA2";
                // e.currentTarget.style.color = theme === "Light"? "#ffffff":'#ffffff';
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme === "Light" ? "#f0f2f5" : "#333546";
                e.currentTarget.style.color =
                  theme === "Light" ? "#000000" : "#ffffff";
              }}
            >
              <GiNotebook />
              <p>Whitepaper</p>
              <BsBoxArrowUpRight />
            </div>
          </div>

          <div>
            <p className="tags">Tags:</p>
          </div>

          <div className="tag-list">
            <div
              className="mineable"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
            >
              <p>Mineable</p>
            </div>
            <div
              className="pow"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
            >
              <p>PoW</p>
            </div>
            <div
              className="number"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
            >
              <p>SHA-256</p>
            </div>
            <div
              className="store-of-value"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
            >
              <p>Store Of Value</p>
            </div>
            <div
              className="view-all"
              style={{
                backgroundColor: theme === "Light" ? "#f0f2f5" : "#333546",
                color: theme === "Light" ? "black" : "#ffffff",
              }}
            >
              <p>View all</p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-container">
        <div
          className="right-container-top"
          style={{
            borderBottom:
              theme === "Light" ? "1px solid #EFF2F5" : "1px solid #222531",
          }}
        >
          <div className="sub-right-container">
            <p className="bitcoin-price">
              {data.coinData ? data.coinData.name : "BTC"} Price{" "}
              <span className="btc-prices">
                ({data.coinData ? data.coinData.symbol : "BTC"})
              </span>
            </p>
            {/* <h1>$28,565.75</h1> */}
            <div className="btc-price">
              <h1>
                {data.price ? `$${parseFloat(data.price).toFixed(2)}` : ""}
              </h1>

              <button className="red-button">
                <MdArrowDropDown />
                1.60%
              </button>
            </div>

            <div className="eth-price-list">
              <p className="eth-price">
                14.70{" "}
                <span className="symbol">
                  {data.coinData ? data.coinData.symbol : "btc"}
                </span>
              </p>
              <p className="eth-prices">
                {" "}
                <IoMdArrowDropup />
                0.67%
              </p>
            </div>

            <div className="low-list">
              <div className="low-listed">
                <p className="low">Low:</p>
                {/* $27,169.57 */}
                {data.price ? `$${parseFloat(data.price).toFixed(2)}` : ""}
              </div>
              <div className="low-list-button">
                <button className="low-list-button-one"></button>
              </div>
              <div className="low-listed">
                <p className="low">High:</p>
                {data.price ? `$${parseFloat(data.price).toFixed(2)}` : ""}
              </div>
              {/* <div
                className="low-list-twenty-four"
                style={{
                  color: theme === "Light" ? "black" : "#323546",
                }}
              >
                24h <BsChevronDown />
              </div> */}
            </div>
          </div>

          {/* MOBILE VIEW MARKET CAP - BEGINNING OF MORE STATS */}
          <div className="mobile-view-container">
            <div className={`${showMore && "show"} mobile-view `}>
              <div className="third-section2">
                <div
                  className="market-cap-sub"
                  style={{
                    borderRight:
                      theme === "Light"
                        ? "1px solid #EFF2F5"
                        : "1px solid #222531",
                  }}
                >
                  <div className="market-cap-sub2">
                    <p className="market-cap">
                      Market Cap
                      <BsInfoCircle />
                    </p>
                    <div className="market-cap-value">
                      <p className="market-digit">
                        {data2.data
                          ? data2.data.marketcap.current_marketcap_usd
                              .toFixed(0)
                              .toString()
                              .toLocaleString()
                          : "$531,526,680,809"}
                      </p>
                      <p className="market-arrow-up">
                        {" "}
                        <IoMdArrowDropup />
                        1.72%
                      </p>
                    </div>
                  </div>
                  <div className="market-volume-section2">
                    <p className="market-volume">24h Volume/Market </p>
                    <p className="">
                      {data.price ? `$${parseFloat(data.price)}` : ""}
                    </p>
                  </div>
                </div>

                <div
                  className="market-cap-sub"
                  style={{
                    borderRight:
                      theme === "Light"
                        ? "1px solid #EFF2F5"
                        : "1px solid #222531",
                  }}
                >
                  <div className="market-cap-sub2">
                    <p className="market-cap">
                      Fully diluted market cap
                      <BsInfoCircle />
                    </p>
                    <div className="market-cap-value">
                      <p className="market-digit">
                        {data2.data
                          ? data2.data.marketcap.current_marketcap_usd
                              .toFixed(0)
                              .toString()
                              .toLocaleString()
                          : "$531,526,680,809"}
                      </p>
                      <p className="market-arrow-up-one">
                        {" "}
                        <MdArrowDropDown />
                        1.72%
                      </p>
                    </div>
                  </div>

                  <div className="market-volume-section">
                    {/* <p className="market-volume">24h Volume/Market </p>
                <p>Cap 0.0249</p> */}
                  </div>
                </div>
                <div
                  className="market-cap-sub"
                  style={{
                    borderRight:
                      theme === "Light"
                        ? "1px solid #EFF2F5"
                        : "1px solid #222531",
                  }}
                >
                  <div className="market-cap-sub2">
                    <p className="market-cap">
                      Volume <button className="market-cap-button">24h</button>
                      <BsInfoCircle />
                    </p>
                    <div className="market-cap-value">
                      <p className="market-digit">$536,669,680,809</p>
                      <p className="market-arrow-up">
                        {" "}
                        <IoMdArrowDropup />
                        27.28
                      </p>
                    </div>
                  </div>

                  <div className="vol-cex-container">
                    <div className="vol-cex">
                      <p>
                        CEX <BsInfoCircle />
                      </p>
                      <p>13,456,676,777</p>
                    </div>
                    <div className="vol-cex">
                      <p>
                        DEX <BsInfoCircle />
                      </p>
                      <p>13,456,676,777</p>
                    </div>
                  </div>
                </div>
                <div
                  className="market-cap-sub"
                  style={{
                    borderRight:
                      theme === "Light"
                        ? "1px solid #EFF2F5"
                        : "1px solid #222531",
                  }}
                >
                  <div className="vol-cex-container">
                    <p className="market-cap">
                      Circulating Supply
                      <BsInfoCircle />
                    </p>
                    <p className="market-digit">19,354,084 BTC</p>
                  </div>

                  {/* <button className="market-arrow-up-buttons">
                    <button className="market-arrow-up-button"></button>
                  </button> */}

                  <div className="market-cap-sub">
                    <p className="market-cap">
                      Max Supply <BsInfoCircle />
                    </p>
                    <p className="market-cap">
                      Total suply <BsInfoCircle />
                    </p>
                  </div>

                  {/* <div className="vol">
                    <div className="vols">
                      <p>
                        CEX <BsInfoCircle />
                      </p>
                      <p>
                        DEX <BsInfoCircle />
                      </p>
                    </div>

                    <div
                      className="vol-one"
                      style={{
                        color: theme === "Light" ? "black" : "#FFFFFF",
                      }}
                    >
                      <p>13,456,676,777</p>
                      <p>13,456,676,777</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
              className="more-stats"
            >
              <h3 className="more-stats-one">
                {showMore ? "Less stats" : "More stats"}
              </h3>
            </button>
          </div>

          {/* END OF MORE STATS ON MOBILE VIEW */}

          <div className="buttons">
            <div className="button-list">
              <button className="buy">
                Buy
                <MdArrowDropDown />
              </button>
              <button className="buy">
                Exchange
                <MdArrowDropDown />
              </button>
              <button className="buy">
                Gaming
                <MdArrowDropDown />
              </button>
              <button className="buy">
                Earn crypto
                <MdArrowDropDown />
              </button>
            </div>
          </div>

          <div>
            <div
              className="website-links"
              style={{
                borderBottom:
                  theme === "Light" ? "1px solid #EFF2F5" : "1px solid #222531",
              }}
            >
              <h5>Links</h5>
              <p className="website-link">
                Website, Explorers, Socials etc.
                <BsChevronRight />
              </p>
            </div>
            <div
              className="tag-link"
              style={{
                color: theme === "Light" ? "black" : "#FFFFFF",
              }}
            >
              <h5 className="tag">Tags </h5>
              <div className="tag-lists">
                <div className="tag-sub">Mineable</div>
                <div className="tag-sub">PoW</div>
                <div className="tag-sub">+27</div>
                <BsChevronRight />
              </div>
            </div>
          </div>
        </div>

        <div className="right-container-bottom">
          <div className="third-section">
            <div
              className="market-cap-sub"
              style={{
                borderRight:
                  theme === "Light" ? "1px solid #EFF2F5" : "1px solid #222531",
              }}
            >
              <p className="market-cap">
                Market Cap
                <BsInfoCircle />
              </p>
              {/* <p className="market-digit">$531,526,680,809</p> */}
              <p className="market-digit">
                {data2.data
                  ? data2.data.marketcap.current_marketcap_usd
                      .toFixed(0)
                      .toString()
                      .toLocaleString()
                  : "$531,526,680,809"}
              </p>
              <p className="market-arrow-up">
                {" "}
                <IoMdArrowDropup />
                1.72%
              </p>
              <div className="market-volume-section">
                <p className="market-volume">24h Volume/Market Cap</p>
                {/* <p>Cap 0.0249</p> */}
                {data.price ? `$${parseFloat(data.price).toFixed(0)}` : ""}
              </div>
            </div>
            <div
              className="fully-diluted"
              style={{
                borderRight:
                  theme === "Light" ? "1px solid #EFF2F5" : "1px solid #222531",
              }}
            >
              <p className="market-cap-one">
                Fully diluted market cap
                <BsInfoCircle />
              </p>
              <p className="market-digit-ones">
                {data.data
                  ? data.data.marketcap.current_marketcap_usd
                      .toFixed(0)
                      .toString()
                      .toLocaleString()
                  : "$531,526,680,809"}
                <p className="market-arrow-up-one">
                  {" "}
                  <IoMdArrowDropup />
                  1.72%
                </p>
              </p>

              <div className="market-volume-section">
                {/* <p className="market-volume">24h Volume/Market </p>
                <p>Cap 0.0249</p> */}
              </div>
            </div>
            <div
              className="market-cap-main"
              style={{
                borderRight:
                  theme === "Light" ? "1px solid #EFF2F5" : "1px solid #222531",
              }}
            >
              <p className="market-cap">
                Volume <button className="market-cap-button">24h</button>
                <BsInfoCircle />
              </p>
              <p className="market-digit">$536,669,680,809</p>
              <p className="market-arrow-up">
                {" "}
                <IoMdArrowDropup />
                27.28
              </p>

              <div className="vol">
                <div className="vols">
                  <p>
                    CEX <BsInfoCircle />
                  </p>
                  <p>
                    DEX <BsInfoCircle />
                  </p>
                </div>

                <div
                  className="vol-one"
                  style={{
                    color: theme === "Light" ? "black" : "#FFFFFF",
                  }}
                >
                  <p>13,456,676,777</p>
                  <p>13,456,676,777</p>
                </div>
              </div>
            </div>
            <div
              className="market-sub"
              style={{
                borderRight:
                  theme === "Light" ? "1px solid #EFF2F5" : "1px solid #222531",
              }}
            >
              <p className="market-cap">
                Circulating Supply
                <BsInfoCircle />
                <p
                  className="tick-sign"
                  style={{
                    color: theme === "Light" ? "#2544D4" : "#2544D4",
                  }}
                >
                  <MdVerified />
                </p>
              </p>
              <div className="">
                <p className="market-digit">19,354,081 BTC</p>
                <p>92%</p>
              </div>

              <div className="market-arrow-up-button">
                <button className="market-arrow-up-buttons"></button>
              </div>

              <div className="vol">
                <div className="vols">
                  <p>
                    CEX <BsInfoCircle />
                  </p>
                  <p>
                    DEX <BsInfoCircle />
                  </p>
                </div>

                <div
                  className="vol-one"
                  style={{
                    color: theme === "Light" ? "black" : "#FFFFFF",
                  }}
                >
                  <p>13,456,676,777</p>
                  <p>13,456,676,777</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMPORTANT */}
    </div>
  );
};

export default AssetDetails;
