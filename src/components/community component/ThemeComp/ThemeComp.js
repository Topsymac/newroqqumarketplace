import React, { useContext, useState } from "react";
import "./themecomp.css";
import Blogdata from "../../../data/Blogdata";
import GuestPostPage from "../guest post/guest post user/guest post page/GuestPostPage";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const ThemeComp = ({ firstText, secondText }) => {
  const { theme } = useContext(ThemeContext);

  const [changeBGClick, setChangeBG] = useState(0);
  // const [changeBGClick2, setChangeBG2] = useState(false);

  return (
    <>
      <div
        className="theme-comp"
        style={{
          backgroundColor: theme === "Light" ? "#eff2f5" : "#222531",
          border: theme === "Light" ? "" : "1px solid #2B2E3D",
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p
              onClick={() => {
                setChangeBG(0);
              }}
              className={
                changeBGClick === 0
                  ? "theme-comp__switch-one active"
                  : "theme-comp__notActive"
              }
              style={
                changeBGClick === 0
                  ? {
                      backgroundColor: theme === "Light" ? "white" : "#323546",
                      color: theme === "Light" ? "black" : "white",
                    }
                  : { color: theme === "Light" ? "black" : "#808A9D" }
              }
            >
              {firstText}
            </p>
          </div>
          <div>
            <p
              onClick={() => {
                setChangeBG(1);
              }}
              className={
                changeBGClick === 1
                  ? "theme-comp__switch-two"
                  : "theme-comp__notActive"
              }
              style={
                changeBGClick === 1
                  ? {
                      backgroundColor: theme === "Light" ? "white" : "#323546",
                      color: theme === "Light" ? "black" : "white",
                    }
                  : { color: theme === "Light" ? "black" : "#808A9D" }
              }
            >
              {secondText}
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center theme-comp__Link">
        <div>
          <Link to="/" className="d-flex align-items-center">
            All post
            <i
              className="fa-solid fa-angle-down mx-1"
              style={{ fontSize: "12px", paddingTop: "2px" }}
            ></i>
          </Link>
        </div>
        <div>
          <Link to="/">
            <i
              className="fa-solid fa-recycle mx-1"
              style={{ fontSize: "12px", paddingTop: "5px" }}
            ></i>{" "}
            Refresh
          </Link>
        </div>
      </div>
      <div style={{ color: "white" }}>
        {
          changeBGClick === 0 && (
            <div className="theme-comp__GuestPostPage">
              <GuestPostPage blogData={Blogdata} />
            </div>
          )
          // <div>something added</div>
        }
      </div>
      <div style={{ color: "white" }}>
        {changeBGClick === 1 && (
          <div className="theme-comp__GuestPostPage">
            <GuestPostPage blogData={Blogdata} />
          </div>
        )}
      </div>
    </>
  );
};

export default ThemeComp;
