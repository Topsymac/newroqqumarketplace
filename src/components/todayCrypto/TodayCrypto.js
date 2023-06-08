import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Text from "../../atoms/text/Text";
import "./todaycrypto.css";
import TrendingToken from "./trendingToken/TrendingToken";
import RecentlyAdded from "./recentlyAdded/RecentlyAdded";
import Community from "./community/Community";
import { ThemeContext } from "../../context/ThemeContext";

const TodayCrypto = () => {
  const { theme } = useContext(ThemeContext);
  const [showHightlight, setShowHightlight] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const switchfunction = () => {
    if (showHightlight === true) {
      setShowHightlight(false);
    } else {
      setShowHightlight(true);
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div
        className="todayCrypto"
        style={{
          background:
            theme === "Light"
              ? "#F9FBFD"
              : "",
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <div className="todayCrypto__paragraph-div">
          <div>
            <div
              className="todayCrypto__header"
              style={{ color: theme === "Light" ? "#222531" : "white" }}
            >
              <Text text="Today's Cryptocurrency Prices by Market Cap" />
            </div>
            <div>
              <p
                className="todayCrypto__paragraph"
                style={{
                  color: theme === "Light" ? "rgb(128, 138, 157)" : "#A1A7BB",
                }}
              >
                The global crypto market cap is{" "}
                <span className="text-secondary">
                  <b>$1.21T</b>
                </span>
                , a{" "}
                <span style={{ color: "red" }}>
                  <IoMdArrowDropdown
                    color="red"
                    fontSize="20px"
                    style={{ position: "relative", top: "6px" }}
                  />
                  <span>
                    <b>0.24%</b>
                  </span>
                </span>{" "}
                decrease over the last day.{" "}
                <a
                  href="\"
                  className="text-secondary"
                  style={{ fontSize: "16px", color: "rgb(128, 138, 157)" }}
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="todayCrypto__highlight">
                <span
                  style={{
                    color: theme === "Light" ? "#58667e" : "#A1A7BB",
                  }}
                >
                  <Text text="Highlights"></Text>
                </span>
                <div>
                  <label className="todayCrypto__switch">
                    <input
                      type="checkbox"
                      onClick={() => switchfunction()}
                      onChange={handleCheckboxChange}
                      checked={isChecked}
                      style={{
                        backgroundColor:
                          isChecked && theme === "Dark"
                            ? "#CFD6E4"
                            : " #3861fb",
                      }}
                    />
                    <span
                      // className={`todayCrypto__slider ${
                      //   darkMode ? "dark-mode" : "light-mode"
                      // }`}
                      className="todayCrypto__slider"
                      style={{
                        backgroundColor:
                          isChecked && theme === "Dark"
                            ? "#323546"
                            : isChecked && theme === "Light"
                            ? "#CFD6E4"
                            : "#3861fb",
                      }}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!showHightlight ? (
          <div className="todayCrypto__trendingToken">
            <div style={{ width: "31%" }}>
              <TrendingToken />
            </div>
            <div style={{ width: "31%" }}>
              <RecentlyAdded />
            </div>
            <div style={{ width: "31%" }}>
              <Community />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TodayCrypto;
