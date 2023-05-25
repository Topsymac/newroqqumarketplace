import React, { useContext } from "react";
import "./recentlyapipage.css";
import Text from "../../../../atoms/text/Text";
import AssetTable from "../../../asset/AssetTable";
import { ThemeContext } from "../../../../context/ThemeContext";
import TrendingTr from "../../../trending table/TrendingTr";
import RecentlyTable from "../../../trending table/RecentlyTable";
import Watchlist from "../../../watchlist/watchlist molecule/WatchlistMolecule";

const RecentlyApiPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className="recentlyApiPage"
        style={{
          backgroundColor: theme === "Light" ? "#FFF" : "#21232E",
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <div>
          <div className="recentlyApiPage__header">
            <Text text="New Cryptocurrencies" />
          </div>
          <div className="mt-1">
            <div
              className="recentlyApiPage__paragraph"
              style={{
                color: theme === "Light" ? "#5d6b82" : "#A1A7BB",
              }}
            >
              <Text text="New cryptocurrencies added to CoinMarketCap in the last 30 days" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Watchlist />
            </div>
            <div>
              <hr
                style={{
                  color: theme === "Light" ? "#c2c2c2" : "#1F212B",
                  margin: "0px",
                  marginBottom: "15px",
                }}
              />
              <TrendingTr
                text1=""
                text2="#"
                text3="Name"
                text4="Price"
                text5="1h"
                text6="24h"
                text7="Fully Diluted Market cap"
                text8="Volume"
                text9="Blockchain"
                text10="Added"
              />
              <hr
                style={{
                  color: theme === "Light" ? "#c2c2c2" : "#1F212B",
                  margin: "0px",
                }}
              />
            </div>
          </div>
          <div>
            <RecentlyTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyApiPage;
