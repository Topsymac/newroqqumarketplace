import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Asset from "../../components/asset/Asset";
import TodayCrypto from "../../components/todayCrypto/TodayCrypto";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Today's Cryptocurrencies prices */}
      <TodayCrypto />
      <Asset />
      <Footer />
    </div>
  );
};

export default Home;
