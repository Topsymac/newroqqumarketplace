import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/all-tokenNprice/useFetch';
import TrendingTableRow from './TrendingTableRow';

const RecentlyTable = () => {
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
     } = useFetch(
       "https://staging.roqqu.com/v2/history?symbol=btc&interval=1H"
     );

     const finalPrice = priceHistory?.[0]?.price;
     const initialPrice = priceHistory?.[priceHistory.length - 1]?.price;
     const percentageChange =
       ((finalPrice - initialPrice) / initialPrice) * 100;
     const roundPercentage = Math.round(percentageChange * 100) / 100;
  return (
    <>
      <div>
        <div>
          {items.length > 0 && Object.keys(priceData).length > 0 ? (
            <>
              {items?.slice(0,9).map((asset, index) => {
                // console.log(index);
                const price = prices?.data[asset.symbol].price;
                const roundPrice = Math.round(price * 10000) / 10000;
                return (
                  <TrendingTableRow
                    key={index}
                    index={index}
                    name={asset.name}
                    symbol={asset.symbol}
                    price={roundPrice}
                    data={asset}
                    percentageChange={roundPercentage}
                    blockchain
                    added
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
      </div>
    </>
  );
}

export default RecentlyTable
