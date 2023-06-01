import React, { useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Text from "../../atoms/text/Text";
import "./todaycrypto.css";
import TrendingToken from "./trendingToken/TrendingToken";
import RecentlyAdded from "./recentlyAdded/RecentlyAdded";
import Community from "./community/Community";
import { ThemeContext } from "../../context/ThemeContext";

const TodayCrypto = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* #323546 */}
      <div
        className="todayCrypto"
        style={{
          backgroundColor: theme === "Light" ? "#F9FBFD" : "#21232E",
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <div
          className="todayCrypto__header"
          style={{ color: theme === "Light" ? "#222531" : "white" }}
        >
          <Text text="Today's Cryptocurrency Prices by Market Cap" />
        </div>
        {/* <div>
            <Text text="The global crypto market cap is $1.21T, a 0.24% decrease over the last day.Read More"></Text>
        </div> */}
        <div className="mt-1">
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
              <span className="text-danger">
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
      </div>
    </>
  );
};

export default TodayCrypto;
