import React, { useContext } from "react";
import pie from "../Images/icon-pie.svg";
import { ThemeContext } from "../context/ThemeContext";

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className="right1"
        style={{
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <img src={pie} alt="" />
        <p>Portfolio</p>
      </div>
    </div>
  );
};

export default Portfolio;
