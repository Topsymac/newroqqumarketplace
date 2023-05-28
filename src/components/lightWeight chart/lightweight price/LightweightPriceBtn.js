import React, { useContext } from "react";

import { ThemeContext } from "../../../context/ThemeContext";

import "./lightweightpricebtn.css";

const LightweightPriceBtn = ({ lightweightPriceBtn, white }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div>
        <button
          className="btn lightweightPriceBtnDiv"
          style={{
            // backgroundColor: `${white}`,
            backgroundColor: theme === "Light" ? "transparent" : "transparent",
            color: theme === "Light" ? "#5d6b82" : "#808a9d",
          }}
        >
          <div className="lightweightPriceBtn">{lightweightPriceBtn}</div>
        </button>
      </div>
    </>
  );
};

export default LightweightPriceBtn;
