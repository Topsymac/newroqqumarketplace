import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./lightweightbutton.css";
import { useState } from "react";

const LightweightButton = ({
  fontAwesome = "",
  lightweightButtonText,
  active,
}) => {
  const { theme } = useContext(ThemeContext);

  const [buttonHoverStyle, setButtonHoverStyle] = useState(false);

  // const buttonStyle = {
  //   backgroundColor: buttonHoverStyle ? "#313445" : "",
  // };

  const handleMouseEnter = () => {
    setButtonHoverStyle(true);
  };

  const handleMouseLeave = () => {
    setButtonHoverStyle(false);
  };

  return (
    <>
      <div
        className=""
        style={{ backgroundColor: theme === "Light" ? "" : "#313445" }}
      >
        <button
          type="button"
          className={active ? "lightweightButtonActive" : "lightweightButton"}
          style={
            // (
            active
              ? {
                  backgroundColor: theme === "Light" ? "white" : "#0D1421",
                  color: theme === "Light" ? "#5d6b82" : "#808a9d",
                }
              : {
                  backgroundColor:
                    buttonHoverStyle && theme === "Light"
                      ? ""
                      : buttonHoverStyle
                      ? "#0D1421"
                      : theme === "Dark"
                      ? "#313445"
                      : "",
                  // backgroundColor: theme === "Light" ? "" : "#313445",
                  color: theme === "Light" ? "#5d6b82" : "#808a9d",
                }
            // )

            // { backgroundColor: theme === "Light" ? "" : "#313445" }
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i
            className={`${fontAwesome} align-self-middle`}
            style={{
              color: theme === "Light" ? "#5d6b82" : "#808a9d",
              fontSize: "12px",
              lineHeight: "0.1",
              position: "relative",
              top: "-1px",
            }}
          ></i>
          <div>{lightweightButtonText}</div>
        </button>
      </div>
    </>
  );
};

export default LightweightButton;
