import React, { useContext } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Asset from "../../components/asset/Asset";
import TodayCrypto from "../../components/todayCrypto/TodayCrypto";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar />
      {/* Today's Cryptocurrencies prices linear-gradient(rgb(34, 37, 49) 0%, rgba(34, 37, 49, 0) 413px);*/}
      <div
        style={{
          background:
            theme === "Light"
              ? ""
              : "linear-gradient(to bottom, rgb(34, 37, 49) 80px, #17171A 300px)",
        }}
      >
        <TodayCrypto />
        <Asset />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
