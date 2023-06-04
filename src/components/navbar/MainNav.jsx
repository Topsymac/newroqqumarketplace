import React, { useContext } from "react";
import Logo from "../../Images/roqqu-color.svg";
import Logowhite from "../../Images/Logo-White.png";
import "./Navbar.css";
import Portfolio from "../../atoms/Portfolio";
import Watchlist from "../../atoms/Watchlist";
import Input from "../../atoms/Input";
import { ThemeContext } from "../../context/ThemeContext";

const MainNav = () => {
  
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Navbar-wrapper">
      <div className="left-Nav">
        <img
          src={theme === "Dark" ? Logowhite : Logo}
          alt="Logo"
          style={{ width: "120px", height: "30px" }}
        />
        {/* <img src={Logo} alt="" /> */}
        <p>Cryptocurrencies</p>
        <p>Exchanges</p>
        <p>Community</p>
        <p>Products</p>
        <p>Learn</p>
      </div>
      <div className="right-Nav">
        <Watchlist />
        <Portfolio />
        <Input />
      </div>
    </div>
  );
};

export default MainNav;
