import React from "react";
import "./communitybtn.css";
import Text from "../../../../atoms/text/Text";

const CommunityBtn = ({
  img = "",
  height = "",
  width = "",
  fontAwesome = "",
  text = "",
  BGcolor = "",
  textFontsize = "",
  textColor = "",
  FontawesomeColor = "",
  FontawesomeFontsize = "",
  textFontWeight = "",
  padding = "",
  paddingLeft = "",
  paddingRight = "",
  margin = "",
  border = "",
  borderRadius = "",
  paddingBottom = "",
  paddingTop = "",
}) => {
  return (
    <>
      <div
        className="communityBtn btn"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${BGcolor}`,
          padding: `${padding}px`,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          margin: `${margin}`,
          border: `${border}`,
          borderRadius: `${borderRadius}px`,
          // padding:"7px 30px",
        }}
      >
        {img ? (
          <img src={img} alt="" />
        ) : fontAwesome ? (
          <i
            className={`${fontAwesome}`}
            style={{
              fontSize: `${FontawesomeFontsize}px`,
              color: `${FontawesomeColor}`,
            }}
          ></i>
        ) : (
          ""
        )}
        <div
          className={text ? "communityText" : ""}
          style={{
            fontSize: `${textFontsize}px`,
            color: `${textColor}`,
            fontWeight: `${textFontWeight}`,
          }}
        >
          <Text text={text} />
        </div>
      </div>
    </>
  );
};

export default CommunityBtn;
