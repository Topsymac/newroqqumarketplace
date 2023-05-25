import React, { useContext, useState } from "react";
import "./Navbar.css";
import roqquLogo from "../../Images/roqqu-color.svg";
import Logowhite from "../../Images/Logo-White.png";
import { AiOutlineMenu } from "react-icons/ai";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import { ThemeContext } from "../../context/ThemeContext";
import diamond from "../../Images/diamond-icon.svg";
import Watchlist from "../../atoms/Watchlist";
import Portfolio from "../../atoms/Portfolio";
import moon from "../../Images/icon-moon.svg";
import sun from "../../Images/icon-sun.svg";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="nav-container"
      style={{
        backgroundColor: theme === "Light" ? "#FFF" : "hsl(235, 21%, 11%)",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <nav className="navbartoo">
        <div className="navbarLeft">
          <img
            src={theme === "Dark" ? Logowhite : roqquLogo}
            alt="Logo"
            style={{ width: "120px", height: "30px" }}
          />
        </div>
        <div className="navbarRight">
          <button className="themeBtn" onClick={toggleTheme}>
            <img
              src={theme === "Dark" ? sun : moon}
              alt="sun"
              style={{ width: "15px", height: "15px" }}
            />
          </button>
          <div>
            <FiSearch />
          </div>
          <div>
            <img src={diamond} alt="" style={{ width: "20px" }} />
          </div>
          <div className="navMenu">
            <div
              className="nav-icon"
              onClick={() => setShowNav((showNav) => !showNav)}
            >
              <AiOutlineMenu />
            </div>
            {showNav && (
              <div className="nav-items">
                <div>Cryptocurrencies</div>
                <div>Exchange</div>
                <div>Communities</div>
                <div>Products</div>
                <div>Learn</div>
                <Watchlist />
                <Portfolio />
              </div>
            )}
          </div>
          {/* End of menu trial */}
        </div>
      </nav>
      <TopNav />
      <MainNav />
    </div>
  );
};

export default Navbar;
