import React, { useContext } from "react";
import "./Navbar.css";
import Button from "../../molecules/Button";
import diamond from "../../Images/diamond-icon.svg";
import moon from "../../Images/icon-moon.svg";
import sun from "../../Images/icon-sun.svg";
import { ThemeContext } from "../../context/ThemeContext";

const TopNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="Topnav-container"
      style={{
        borderBottomColor: theme === "Light" ? "#eff2f5" : "rgb(34,37,49)",
      }}
    >
      <div className="left-Topnav">
        <p>
          Cryptos:<span> 23,473 </span>
          Exchanges:<span> 617 </span>
          Market Cap:<span> $1,211,264,070,597 </span>
          24h Vol:<span> $62,385,313,409 </span>
          Dominance:<span> BTC: 46.1% ETH: 19.1% </span>
          ETH Gas:<span> 52 Gwei </span>
        </p>
      </div>
      <div className="right-Topnav">
        <div className="toLeftNav">
          <p>English</p>
          <p>USD</p>
          <button className="themeBtn" onClick={toggleTheme}>
            <img
              src={theme === "Dark" ? sun : moon}
              alt="sun"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
        <img src={diamond} alt="" />
        <Button props="Log In" />
        <Button props="Sign up" />
      </div>
    </div>
  );
};

export default TopNav;
