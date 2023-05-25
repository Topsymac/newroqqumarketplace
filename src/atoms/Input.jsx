import React from "react";
import search from "../Images/icon-search.svg";
import "./atoms.css";

const Input = () => {
  return (
    <div>
      <div className="right-input">
        <img src={search} alt="" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Input;
