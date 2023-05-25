import React from "react";
import Text from "../../../../atoms/text/Text";

const CommunityBtn = ({
  img="",
  height="",
  width="",
  fontAwesome="",
  text="",
  BGcolor="",
  textFontsize="",
  textColor="",
  FontawesomeColor="",
  FontawesomeFontsize="",
  textFontWeight="",
  padding="",
  paddingLeft="",
  paddingRight="",
  margin="",
  border="",
  borderRadius="",
}) => {
  return (
    <>
      <button
        className="btn d-flex align-items-center justify-content-between"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${BGcolor}`,
          padding: `${padding}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          margin: `${margin}`,
          border:`${border}`,
          borderRadius:`${borderRadius}`
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
          className={text ? "mx-1" : ""}
          style={{
            fontSize: `${textFontsize}px`,
            color: `${textColor}`,
            fontWeight: `${textFontWeight}`,
          }}
        >
          <Text text={text} />
        </div>
      </button>
    </>
  );
};

export default CommunityBtn;
