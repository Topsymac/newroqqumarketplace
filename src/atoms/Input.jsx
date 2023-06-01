import React from "react";
import search from "../Images/icon-search.svg";
import "./atoms.css";
import { BsSlashSquareFill} from "react-icons/bs"

const Input = () => {
  return (
    <div>
      <div className="right-input">
        <img src={search} alt="" />
        <input type="text" placeholder="Search" />
        <BsSlashSquareFill fill="rgb(166, 176, 195)" size="19px" />
      </div>
    </div>
  );
};

export default Input;
