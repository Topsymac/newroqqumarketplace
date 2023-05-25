import React from "react";
import LightweightButton from "../lightweight button/LightweightButton";
import { useState } from "react";
import LightweightPriceBtn from "../lightweight price/LightweightPriceBtn";

const LightweightMolecule = ({ onClickProp }) => {
  const [activeButton, setActiveButton] = useState("1H");
  const [timeInterval, setTimeInterval] = useState("1H");
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div
          className="d-flex mb-2 mb-xl-0"
          style={{
            backgroundColor: "#EFEFEF",
            padding: "4px",
            borderRadius: "10px",
            paddingLeft: "3px",
          }}
        >
          <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
            <LightweightPriceBtn lightweightPriceBtn="Price" white />
          </div>
          <div>
            <LightweightPriceBtn lightweightPriceBtn="Market Cap" />
          </div>
          <div>
            <LightweightPriceBtn lightweightPriceBtn="TradingView" />
          </div>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{
            backgroundColor: "#EFEFEF",
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
          <div className="mx-1"
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
