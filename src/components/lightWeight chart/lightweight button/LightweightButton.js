import React from "react";
import "./lightweightbutton.css";

const LightweightButton = ({fontAwesome="", lightweightButtonText, active }) => {
  return (
    <>
      <div className="">
        <button
          type="button"
          className={active ? "lightweightButtonActive" : "lightweightButton"}
        >
          <i
            className={`${fontAwesome} align-self-middle`}
            style={{
              color: "#5d6b82",
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
