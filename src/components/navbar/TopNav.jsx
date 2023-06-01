import React, { useContext } from "react";
import "./Navbar.css";
// import Button from "../../molecules/Button";
import diamond from "../../Images/diamond-icon.svg";
import moon from "../../Images/icon-moon.svg";
import sun from "../../Images/icon-sun.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai"
import { BsFuelPumpFill } from "react-icons/bs"

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
          <BsFuelPumpFill fill="grey" size="10px" /> ETH Gas:
          <span> 52 Gwei </span>
        </p>
      </div>
      <div className="right-Topnav">
        <div className="toLeftNav">
          <div className="toLeftNavIcon">
            <p>English </p>
            <IoMdArrowDropdown size="19px" />
          </div>
          <div className="toLeftNavIcon">
            <AiFillDollarCircle size="19px" fill="#16c784" />
            <p>USD</p>
            <span>
              <IoMdArrowDropdown size="19px" />
            </span>
          </div>
          <button className="themeBtn" onClick={toggleTheme}>
            <img
              src={theme === "Dark" ? sun : moon}
              alt="sun"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
        <div className="TopNavBorderRight"></div>
        <img src={diamond} alt="" />
        <button className="LogInBtn">Log In</button>
        <button className="SignUpBtn">Sign Up</button>
        {/* <Button props="Log In" /> */}
        {/* <Button props="Sign up" /> */}
      </div>
    </div>
  );
};

export default TopNav;
