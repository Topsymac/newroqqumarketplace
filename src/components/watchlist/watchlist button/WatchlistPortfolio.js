import React from 'react';
import "./watchlistportfolio.css";
import { useState } from "react";

const WatchlistPortfolio = ({ watchlist, fontAwesome = "",white}) => {
  return (
    <>
      <button className="btn watchlistPortfolioDiv d-flex align-items-center">
        <i
          className={`${fontAwesome} align-self-middle`}
          style={{
            fontSize: "12px",
            lineHeight: "0.1",
            position: "relative",
            top: "-1px",
            color: `${white ? "#d4d4d4" : "#5d6b82"}`,
          }}
        ></i>
        <div
          className="watchlistPortfolio"
          // onClick={watchlistClick}
          // style={{
          //   backgroundColor: watchlistClickbtn,
          //   color: watchlistClickcolor,
          // }}
        >
          {/* <p>
          </p> */}
          {watchlist}
        </div>
      </button>
    </>
  );
};

export default WatchlistPortfolio
