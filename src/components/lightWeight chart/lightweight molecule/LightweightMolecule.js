import React, { useContext } from "react";
import { useState } from "react";
import LightweightButton from "../lightweight button/LightweightButton";
import LightweightPriceBtn from "../lightweight price/LightweightPriceBtn";
import { ThemeContext } from "../../../context/ThemeContext";

import "./lightweightmolecule.css";

const LightweightMolecule = ({ onClickProp }) => {
  const { theme } = useContext(ThemeContext);

  const [activeButton, setActiveButton] = useState("1H");
  const [timeInterval, setTimeInterval] = useState("1H");
  return (
    <>
      <div className="LightweightMolecule">
        <div
          className="LightweightMolecule__marketNPrice"
          style={{
            backgroundColor: theme === "Light" ? "#EFEFEF" : "#313445",
            padding: "4px",
            borderRadius: "10px",
            paddingLeft: "3px",
          }}
        >
          <div
            style={{
              backgroundColor: theme === "Light" ? "white" : "#0D1421",
              borderRadius: "10px",
            }}
          >
            <LightweightPriceBtn lightweightPriceBtn="Price" />
          </div>
          <div>
            <LightweightPriceBtn lightweightPriceBtn="Market Cap" />
          </div>
          <div>
            <LightweightPriceBtn lightweightPriceBtn="TradingView" />
          </div>
        </div>
        <div
          className="LightweightMolecule__timeInterval"
          style={{
            backgroundColor: theme === "Light" ? "#EFEFEF" : "#313445",
            padding: "3px",
            borderRadius: "10px",
            paddingLeft: "3px",
          }}
        >
          <div
            onClick={() => {
              onClickProp("1H");
              setActiveButton("1H");
            }}
          >
            <LightweightButton
              lightweightButtonText="1H"
              active={activeButton === "1H"}
            />
          </div>
          <div
            onClick={() => {
              onClickProp("1D");
              setActiveButton("1D");
            }}
          >
            <LightweightButton
              lightweightButtonText="1D"
              active={activeButton === "1D"}
            />
          </div>
          <div
            onClick={() => {
              onClickProp("1W");
              setActiveButton("1W");
            }}
          >
            <LightweightButton
              lightweightButtonText="1W"
              active={activeButton === "1W"}
            />
          </div>
          <div
            onClick={() => {
              onClickProp("1M");
              setActiveButton("1M");
            }}
          >
            <LightweightButton
              lightweightButtonText="1M"
              active={activeButton === "1M"}
            />
          </div>
          <div
            onClick={() => {
              onClickProp("6M");
              setActiveButton("6M");
            }}
          >
            <LightweightButton
              lightweightButtonText="6M"
              active={activeButton === "6M"}
            />
          </div>
          <div
            onClick={() => {
              setTimeInterval("1Y");
              setActiveButton("1Y");
            }}
          >
            <LightweightButton
              lightweightButtonText="1Y"
              active={activeButton === "1Y"}
            />
          </div>
          <div>
            <LightweightButton lightweightButtonText="ALL" />
          </div>
          <div
            style={{
              position: "relative",
              top: "5px",
              borderLeft: "1px solid #5d6b82",
              // borderRight: "1px solid #5d6b82",
              height: "18px",
            }}
          ></div>
          <div
            className="mx-1"
            // style={{
            //   position:"relative",
            //   top:"20px",
            //   borderLeft: "1px solid #5d6b82",
            //   borderRight: "1px solid #5d6b82",
            //   height:"15px"
            // }}
          >
            <LightweightButton fontAwesome="fa fa-calendar" />
          </div>
          <div
            style={{
              position: "relative",
              top: "5px",
              borderLeft: "1px solid #5d6b82",
              // borderRight: "1px solid #5d6b82",
              height: "18px",
              marginRight: "4px",
            }}
          ></div>
          <div>
            <LightweightButton lightweightButtonText="LOG" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LightweightMolecule;
