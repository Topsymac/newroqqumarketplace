import React, { useContext } from "react";
import Watchlist from "../../atoms/Watchlist";
import Portfolio from "../../atoms/Portfolio";
// import star from "../../Images/icon-star.svg";
import "./Asset.css";
import { ThemeContext } from "../../context/ThemeContext";
import { BiChevronDown } from "react-icons/bi";
import { CiSliderHorizontal } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { BsList } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";

const NavAsset = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className="assetNav"
        style={{
          color: theme === "Light" ? "black" : "white",
          borderBottomColor: theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
        }}
      >
        <div className="leftAssNav">
          <div
            className="leftbtn"
            style={{
              backgroundColor:
                theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <Watchlist />
          </div>
          <div
            className="leftbtn"
            style={{
              backgroundColor:
                theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <Portfolio />
          </div>
        </div>
        <div className="TopNavBorderRight"></div>
        <div className="middleAssNav">
          <p >Cryptocurrencies</p>

          <p>Categories</p>

          <p>DeFi</p>

          <p>NFT</p>

          <p>Metaverse</p>

          <p>Polkadot</p>

          <p>BNB Chain</p>

          <p>Solana</p>

          <p>Avalanche</p>
        </div>

        <div
          className="rightAssNav"
          style={{
            color: theme === "Light" ? "black" : "white",
          }}
        >
          <div>
            <p style={{ fontWeight: "300" }}>Show rows</p>
          </div>
          <div
            className="box leftbtn"
            style={{
              backgroundColor:
                theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <p>100</p>
            <BiChevronDown />
          </div>
          <div
            className="box leftbtn"
            style={{
              backgroundColor:
                theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <CiSliderHorizontal />
            <p>Filters</p>
          </div>
          <div
            className="box leftbtn"
            style={{
              backgroundColor:
                theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <SlCalender />
            <p>Customize</p>
          </div>
          <div
            className="box leftbtn"
            style={{
              backgroundColor:
                theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <p>
              <BsList />
            </p>
            <p>
              <RiLayoutGridFill />
            </p>
          </div>
        </div>
      </div>

      {/* Trial bar */}
      <div
        className="trial"
        style={{
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <div className="trialTop">
          <div className="leftAssNav1">
            <div
              className="leftbtn"
              style={{
                backgroundColor:
                  theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
                color: theme === "Light" ? "black" : "white",
              }}
            >
              <Watchlist />
            </div>
            <div
              className="leftbtn"
              style={{
                backgroundColor:
                  theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
                color: theme === "Light" ? "black" : "white",
              }}
            >
              <Portfolio />
            </div>
          </div>
          <div
            className="rightAssNav1"
            style={{
              color: theme === "Light" ? "black" : "white",
            }}
          >
            <div>
              <p style={{ fontWeight: "300" }}>Show rows</p>
            </div>
            <div className="box">
              <p>100</p>
              <BiChevronDown />
            </div>
            <div
              className="box leftbtn"
              style={{
                backgroundColor:
                  theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
                color: theme === "Light" ? "black" : "white",
              }}
            >
              <CiSliderHorizontal />
              <p>Filters</p>
            </div>
            <div
              className="box leftbtn"
              style={{
                backgroundColor:
                  theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
                color: theme === "Light" ? "black" : "white",
              }}
            >
              <SlCalender />
              <p>Customize</p>
            </div>
            <div
              className="box leftbtn"
              style={{
                backgroundColor:
                  theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
                color: theme === "Light" ? "black" : "white",
              }}
            >
              <p>
                <BsList />
              </p>
              <p>
                <RiLayoutGridFill />
              </p>
            </div>
          </div>
        </div>
        <div className="middleAssNav1">
          <p>Cryptocurrencies</p>

          <p>Categories</p>

          <p>DeFi</p>

          <p>NFT</p>

          <p>Metaverse</p>

          <p>Polkadot</p>

          <p>BNB Chain</p>

          <p>Solana</p>

          <p>Avalanche</p>
        </div>
      </div>
      {/* Trial bar */}
    </div>
  );
};

export default NavAsset;
