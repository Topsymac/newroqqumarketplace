import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import WatchlistButton from "../watchlist button/WatchlistButton";
import { Link } from "react-router-dom";
import WatchlistPortfolio from "../watchlist button/WatchlistPortfolio";

const WatchlistMolecule = () => {
  const location = useLocation();
  const [activetab, setActivetab] = useState("");
  useEffect(() => {
    // console.log(location)
    if (location.state) {
      setActivetab(location.state.id);
    }
  }, []);
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <div>
          <WatchlistPortfolio
            fontAwesome="fa fa-star"
            watchlist="Watchlist"
            white
          />
        </div>
        <div
          className=""
          style={{
            fontWeight: "bold !important",
            color: "black !important",
            height: "30px !important",
            marginLeft: "8px",
          }}
        >
          <WatchlistPortfolio
            fontAwesome="fa fa-pie-chart"
            watchlist="Portfolio"
          />
        </div>
        <div
          className="horizontal-line"
          style={{
            backgroundColor: "#eaedf0",
            width: "2px",
            height: "20px",
            marginLeft: "10px",
          }}
        ></div>
        <div id="1" onClick={() => setActivetab("1")}>
          <WatchlistButton watchlist="Spotlight" active={activetab == 1} />
        </div>
        <div id="2" onClick={() => setActivetab("2")}>
          <WatchlistButton
            watchlist="Gainers & Losers"
            active={activetab == 2}
          />
        </div>
        <Link
          to="/trending-cryptocurrency"
          id="3"
          onClick={() => setActivetab("3")}
          style={{ textDecoration: "none" }}
        >
          <WatchlistButton watchlist="Trending" active={activetab == 3} />
        </Link>
        <div id="4" onClick={() => setActivetab("4")} state={{ id: "4" }}>
          <WatchlistButton watchlist="Most Visited" active={activetab == 4} />
        </div>
        <Link
          to="/recently-added-coin"
          id="5"
          onClick={() => setActivetab("5")}
          state={{ id: "5" }}
          style={{ textDecoration: "none" }}
        >
          <WatchlistButton watchlist="Recently Added" active={activetab == 5} />
        </Link>
      </div>
    </>
  );
};

export default WatchlistMolecule;
