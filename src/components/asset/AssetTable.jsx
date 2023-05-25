import React, { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import ReactPaginate from "react-paginate";
import { ThemeContext } from "../../context/ThemeContext";

import "./Asset.css";
import { BsInfoCircleFill } from "react-icons/bs";
// import { TbArrowUpRight } from "react-icons/tb";

import TableCard from "./TableCard";

// import Pagination from "../pagination/Pagination";

const AssetTable = () => {
  const { theme } = useContext(ThemeContext);

  const [assets, setAssets] = useState([]);
  const [prices, setPrices] = useState([]);
  const [items, setItems] = useState([]);

  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);
  const POST_PER_PAGE = 10;

  const paginate = (data) => {
    const lastPostIndex = 10;
    const firstPostIndex = lastPostIndex - POST_PER_PAGE;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);
    setItems(currentPosts);
  };

  const handlePageClick = (data) => {
    let selected = data.selected + 1;
    // console.log("Selected*************", selected);
    const lastPostIndex = selected * POST_PER_PAGE;
    const firstPostIndex = lastPostIndex - POST_PER_PAGE;
    const currentPosts = assets.slice(firstPostIndex, lastPostIndex);

    setItems(currentPosts);
  };

  useEffect(() => {
    fetch("https://staging.roqqu.com/v2/all-tokens")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setAssets(data.data);
        paginate(data.data);
        // setItems(data.data);
      })
      .catch((err) => console.log(err.message));
    fetch("https://staging.roqqu.com/v2/prices")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPrices(data);
      })
      .catch((err) => console.log(err.message));

    // eslint-disable-next-line
  }, []);
  const priceData = prices.data ? prices.data : {};

  return (
    <div>
      <div className="table-container">
        <table className="table">
          <thead
            className="thead"
            style={{
              borderBottomColor:
                theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
            }}
          >
            <tr>
              <th className="head"></th>
              <th className="head">#</th>
              <th className="name">Name</th>
              <th className="price">Price</th>
              <th className="changes">1h%</th>
              <th className="changes">24h%</th>
              <th className="changes">7d%</th>
              <th className="market">
                <div className="markets">
                  Market Cap
                  <BsInfoCircleFill fill="rgb(166, 176, 195)" />
                </div>
              </th>
              <th className="volume">
                <div className="markets">
                  Volume(24h)
                  <BsInfoCircleFill fill="rgb(166, 176, 195)" />
                </div>
              </th>
              <th className="supply">
                <div className="markets">
                  Circulating Supply
                  <BsInfoCircleFill fill="rgb(166, 176, 195)" />
                </div>
              </th>
              <th className="buys">Last 7 Days</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {items.length > 0 && Object.keys(priceData).length > 0 ? (
              <>
                {items?.map((asset, index) => {
                  // console.log(prices, asset);
                  const price = prices?.data[asset.symbol].price;
                  const roundPrice = Math.round(price * 1000000) / 1000000;
                  // console.log(items);
                  return (
                    <TableRow
                      key={index}
                      name={asset.name}
                      symbol={asset.symbol}
                      price={roundPrice}
                      data={asset}
                    />
                  );
                })}
              </>
            ) : (
              <tr>
                <td>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* MOBILE VIEW */}
        <div
          className="tableCard"
          style={{
            backgroundColor: theme === "Light" ? "#FFF" : "hsl(235, 21%, 11%)",
          }}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {items.length > 0 && Object.keys(priceData).length > 0 ? (
            <>
              {items?.map((asset, index) => {
                // console.log(prices, asset);
                const price = prices?.data[asset.symbol].price;
                const roundPrice = Math.round(price * 1000000) / 1000000;
                // console.log(items);
                return (
                  <TableCard
                    key={index}
                    name={asset.name}
                    symbol={asset.symbol}
                    price={roundPrice}
                    data={asset}
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
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={assets.length / POST_PER_PAGE}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default AssetTable;
