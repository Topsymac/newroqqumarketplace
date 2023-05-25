import React from "react";
import Text from "../../../../atoms/text/Text";
import CommunityBtn from "../../community atom/community btn/CommunityBtn";
// import { useContext } from "react";
// import { ThemeContext } from "../../../../context/ThemeContext";

import "./guestpage.css"


const GuestPage = () => {
  // const { theme } = useContext(ThemeContext);
  return (
    <>
      <div style={{ padding: "0px 25px", opacity: "0.2" }}>
        <div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <i className="fa-solid fa-user guestPage__user"></i>
              <span className="guestPage__logoText text-center mx-2">
                <Text text="Guest" />
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <CommunityBtn
                  text="Bullish"
                  fontAwesome="fa-solid fa-caret-up"
                  //   color="#3861FB"
                  // BGcolor="#3861FB"
                  textFontsize="11"
                  border="1px solid black"
                  padding="3"
                  paddingRight="10"
                  paddingLeft="10"
                  FontawesomeColor="#16C784"
                />
              </div>
              <div className="mx-2">
                <CommunityBtn
                  text="Bearish"
                  fontAwesome="fa-solid fa-caret-down"
                  //   color="#3861FB"<i class=""></i>
                  // BGcolor="#3861FB"
                  textFontsize="11"
                  border="1px solid black"
                  padding="3"
                  paddingRight="10"
                  paddingLeft="10"
                  FontawesomeColor="red"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 mx-4" style={{ color: "#3861FB" }}>
          <Text text="$BTC" />
        </div>
        <div
          className="d-flex justify-content-between align-items-start mb-3"
          style={{ marginTop: "40px" }}
        >
          <div className="d-flex align-items-center">
            <div>
              <CommunityBtn
                //   color="#3861FB"
                fontAwesome="fa-solid fa-image"
                FontawesomeFontsize="19"
              />
            </div>
            <div>
              <CommunityBtn
                fontAwesome="fa-solid fa-gift"
                FontawesomeFontsize="19"
              />
            </div>
            <div>
              <CommunityBtn
                fontAwesome="fa-solid fa-face-smile"
                //   color="#3861FB"
                FontawesomeFontsize="19"
              />
            </div>
            <div>
              <CommunityBtn
                fontAwesome="fa-solid fa-chart-simple"
                FontawesomeFontsize="19"
                //   color="#3861FB"<i class=""></i>
              />
            </div>
          </div>
          <div>
            <CommunityBtn
              text="Post"
              textColor="white"
              textFontsize="12"
              //   color="#3861FB"
              BGcolor="#3861FB"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestPage;
