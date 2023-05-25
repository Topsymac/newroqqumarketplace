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
          backgroundColor: theme === "Light" ? "#FFF" : "#21232E",
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <div className="todayCrypto__header">
          <Text text="Today's Cryptocurrency Prices by Market Cap" />
        </div>
        {/* <div>
            <Text text="The global crypto market cap is $1.21T, a 0.24% decrease over the last day.Read More"></Text>
        </div> */}
        <div className="mt-1">
          <p
            className="todayCrypto__paragraph"
            style={{
              color: theme === "Light" ? "black" : "#A1A7BB",
            }}
          >
            The global crypto market cap is{" "}
            <span className="text-secondary">
              <b>$1.21T</b>
            </span>
            , a <IoMdArrowDropdown color="red" fontSize="20px" />
            <span className="text-danger">
              <b>0.24%</b>
            </span>{" "}
            decrease over the last day.{" "}
            <a href="#" className="text-secondary" style={{ fontSize: "16px" }}>
              Read More
            </a>
          </p>
        </div>
        <div className="d-none d-xl-flex flex-wrap justify-content-between align-items-center  ">
          <div>
            <TrendingToken />
          </div>
          <div>
            <RecentlyAdded />
          </div>
          <div>
            <Community />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayCrypto;
