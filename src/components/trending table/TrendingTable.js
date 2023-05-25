import React, { useEffect, useState } from "react";
// import TrendingChart from './TrendingChart'
import TrendingTr from "./TrendingTr";
import TrendingTableRow from "./TrendingTableRow";
import useFetch from "../../hooks/all-tokenNprice/useFetch";

const TrendingTable = () => {
  const [assets, setAssets] = useState([]);
  const [prices, setPrices] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://staging.roqqu.com/v2/all-tokens")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        // setAssets(data.data);
        setItems(data.data);
      })
      .catch((err) => console.log(err.message));
    fetch("https://staging.roqqu.com/v2/prices")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPrices(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const priceData = prices.data ? prices.data : {};
  // console.log(priceData);

  //price time interval 1H
  const {
    data: priceHistory,
    error,
    loading,
  } = useFetch("https://staging.roqqu.com/v2/history?symbol=btc&interval=1H");

  const finalPrice = priceHistory?.[0]?.price;
  const initialPrice = priceHistory?.[priceHistory.length - 1]?.price;
  const percentageChange = ((finalPrice - initialPrice) / initialPrice) * 100;
  const roundPercentage = Math.round(percentageChange * 100) / 100;

// const {
  
// }= useFetch("https://staging.roqqu.com/v2/history?symbol=${symbol}&interval=1D");

// const priceSevenHistory = data.data;
// const finalSevenPrice = priceSevenHistory[0].price;
// const initialSevenPrice = priceSevenHistory[priceSevenHistory.length - 1].price;

// const percentageChange =
//   ((finalSevenPrice - initialSevenPrice) / initialSevenPrice) * 100;
// const roundSevenPercentage = Math.round(percentageChange * 100) / 100;

  return (
    <>
      <div>
        <hr/>
        <div>
          <TrendingTr />
        </div>
        <hr/>
        <div>
          {items.length > 0 && Object.keys(priceData).length > 0 ? (
            <>
              {items?.map((asset, index) => {
                // console.log(prices, asset);
                const price = prices?.data[asset.symbol].price;
                const roundPrice = Math.round(price * 1000000) / 1000000;
                return (
                  <TrendingTableRow
                    key={index}
                    index={index}
                    name={asset.name}
                    symbol={asset.symbol}
                    price={roundPrice}
                    data={asset}
                    percentageChange={roundPercentage}
                    chart
                    // twentyFourData
                  />
                );
              })}
            </>
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </div>
        {/* <TrendingChart/> */}
      </div>
    </>
  );
};

export default TrendingTable;
