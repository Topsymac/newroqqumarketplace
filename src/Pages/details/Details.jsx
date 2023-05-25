import React from "react";
import AssetDetails from "../../components/asset-details/AssetDetails";
import Converter from "../../components/Converter/Converter";
import Card from "../../components/Card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ChartApiComponent from "../../components/lightWeight chart/ChartApiComponent";
import "./Details.css";


const Details = () => {
  return (
    <div className="details-page">
      <div className="details-page-content">
        <Navbar />
        <AssetDetails />
        {/* this is the chart component space */}
      <ChartApiComponent />
        <Converter />
        <Card />
      </div>
      <Footer />
    </div>
    
  );
};

export default Details;
