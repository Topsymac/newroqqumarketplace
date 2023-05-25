import React from 'react'
import "./watchlistbutton.css";
import { useState } from 'react';
const WatchlistButton = ({ watchlist,fontAwesome="",active }) => {

  return (
    <>
      <button className="btn  d-flex align-items-center justify-content-between">
        <i className={`${fontAwesome} align-self-middle`} style={{ color: "#5d6b82",fontSize:"12px",lineHeight:"0.1",position:"relative",top:"-1px" }}></i>
        <div
          className={active ? "watchlistButtonActive" : "watchlistButton"}
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

export default WatchlistButton
