import React from "react";

const ImgNfontAwesome = ({
  img,
  fontAwesome,
  fontAwesomeWidth,
  fontAwesomeHeight,
}) => {
  return (
    <>
      <div style={{ color: "green" }}>
        {img ? (
          <img
            src={img}
            alt=""
            style={{ width: "30px", height:"30px",borderRadius:"100%" }}
          />
        ) : fontAwesome ? (
          <i
            className={`${fontAwesome}`}
            style={{
              width: `${fontAwesomeWidth}px`,
              height: `${fontAwesomeHeight}px`,
            }}
          ></i>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ImgNfontAwesome;
