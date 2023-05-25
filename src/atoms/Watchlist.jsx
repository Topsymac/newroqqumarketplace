import React, { useContext } from "react";
import star from "../Images/icon-star.svg";
import "./atoms.css";
import { ThemeContext } from "../context/ThemeContext";

const Watchlist = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className="right1"
        style={{
          color: theme === "Light" ? "black" : "white",
        }}
      >
        <img src={star} alt="" />
        <p>Watchlist</p>
      </div>
    </div>
  );
};

export default Watchlist;
