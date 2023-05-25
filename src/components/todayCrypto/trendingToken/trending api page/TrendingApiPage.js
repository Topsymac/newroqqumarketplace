import React, { useContext } from "react";
import Text from "../../../../atoms/text/Text";
import "./trendingapipage.css";
import { ThemeContext } from "../../../../context/ThemeContext";
import AssetTable from "../../../asset/AssetTable";
import TrendingTable from "../../../trending table/TrendingTable";
import TrendingTr from "../../../trending table/TrendingTr";
import WatchlistMolecule from "../../../watchlist/watchlist molecule/WatchlistMolecule";

const TrendingApiPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="trendingApiPage"
        style={{
          backgroundColor: theme === "Light" ? "#FFF" : "#21232E",
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <div style={{marginBottom:"40px"}}>
          <div className="trendingApiPage__header">
            <Text text="What Are The Trending Cryptocurrencies On CoinMarketCap?" />
          </div>
          <div className="mt-1">
            <div
              className="trendingApiPage__paragraph"
              style={{
                color: theme === "Light" ? "#5d6b82" : "#A1A7BB",
              }}
            >
              <Text text="Below is a list of the trending cryptocurrencies that people are searching for on CoinMarketCap" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <WatchlistMolecule />
          </div>
          <div>
            <TrendingTr
              text1=""
              text2="#"
              text3="Name"
              text4="Price"
              text5="24h"
              text6="7d"
              // text7= null
              text8="Market cap"
              text9="volume(24h)"
              text10="last 7days"
            />
          </div>
          <TrendingTable />
        </div>
      </div>
    </>
  );
};

export default TrendingApiPage;
