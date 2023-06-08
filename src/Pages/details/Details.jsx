import React, { useContext } from "react";
import AssetDetails from "../../components/asset-details/AssetDetails";
// import Converter from "../../components/Converter/Converter";
import Card from "../../components/Card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ChartApiComponent from "../../components/lightWeight chart/ChartApiComponent";

import { ThemeContext } from "../../context/ThemeContext";
import "./Details.css";

const Details = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="details-page">
      <div className="details-page-content">
        <Navbar />
        {/* added backgroundColor */}
        <div
          style={{
            background:
              theme === "Light"
                ? ""
                : "linear-gradient(to bottom, rgb(34, 37, 49) 80px, #17171A 300px)",
          }}
        >
          <AssetDetails />
          <div>
            <div
              className="details__horizontal-line"
              style={{
                backgroundColor: theme === "Dark" ? "#323546" : "#EFF2F5",
              }}
            ></div>
          </div>
          {/* this is the chart component space */}
          <ChartApiComponent />
          <div>
            <div
              className="details__horizontal-line"
              style={{
                backgroundColor: theme === "Dark" ? "#323546" : "#EFF2F5",
              }}
            ></div>
          </div>
          {/* <Converter /> */}
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
