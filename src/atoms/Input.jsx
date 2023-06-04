import React, { useContext } from "react";
// import search from "../Images/icon-search.svg";
import "./atoms.css";
import { BsSlashSquareFill} from "react-icons/bs"
import { BiSearch } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";

const Input = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className="right-input"
        style={{
          backgroundColor:
            theme === "Light" ? "rgb(239, 242, 245)" : "rgb(50, 53, 70)",
        }}
      >
        {/* <img src={search} alt="" /> */}
        <div className="inputter">
          <div>
            <BiSearch fill="rgb(166, 176, 195)" size="18px" />
          </div>
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: theme === "Light" ? "#eff2f5" : "#323546",
            }}
          />
        </div>
        {theme === "Dark" ? (
          <BsSlashSquareFill fill="rgb(100, 107, 128)" size="19px" />
        ) : (
          <BsSlashSquareFill fill="rgb(166, 176, 195)" size="19px" />
        )}
      </div>
    </div>
  );
};

export default Input;
