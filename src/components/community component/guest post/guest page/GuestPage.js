import React from "react";
import Text from "../../../../atoms/text/Text";
import CommunityBtn from "../../community atom/community btn/CommunityBtn";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

import "./guestpage.css";

const GuestPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          padding: "0px 25px",
          paddingBottom: "25px",
          backgroundColor: theme === "Light" ? "white" : "#161722",
          // opacity: theme === "Light" ? "0.2" : "",
          borderTop: theme === "Light" ? "1px solid #EEF1F4" : "",
        }}
      >
        <div>
          <div className="guestPage">
            <div
              className="guestPage__guest"
              style={{ opacity: theme === "Dark" ? "0.5" : "0.2" }}
            >
              <i
                className="fa-solid fa-user guestPage__user"
                style={{ color: theme === "Dark" ? "#808a9d" : "" }}
              ></i>
              <span
                className="guestPage__logoText"
                style={{ color: theme === "Dark" ? "#808a9d" : "" }}
              >
                <Text text="Guest" />
              </span>
            </div>
            <div className="guestPage__bullish">
              <div style={{ opacity: theme === "Dark" ? "0.5" : "0.2" }}>
                <CommunityBtn
                  text="Bullish"
                  fontAwesome="fa-solid fa-caret-up"
                  textColor={theme === "Light" ? "black" : "#808a9d "}
                  //   color="#3861FB"
                  // BGcolor="#3861FB"
                  textFontsize="11"
                  border={
                    theme === "Light"
                      ? "1px solid #d8d8d8"
                      : "1px solid #161722"
                  }
                  padding="3"
                  paddingRight="10"
                  paddingLeft="10"
                  borderRadius="5"
                  FontawesomeColor="#16C784"
                  textFontWeight="500"
                />
              </div>
              <div
                style={{
                  color: theme === "Light" ? "black" : "white !important",
                  marginLeft: "0.4rem",
                  opacity: theme === "Dark" ? "0.5" : "0.2",
                }}
              >
                <CommunityBtn
                  text="Bearish"
                  fontAwesome="fa-solid fa-caret-down"
                  textColor={theme === "Light" ? "black" : "#808a9d "}
                  //   color="#3861FB"<i class=""></i>
                  // BGcolor="#3861FB"
                  textFontsize="11"
                  border={
                    theme === "Light"
                      ? "1px solid #d8d8d8"
                      : "1px solid #161722"
                  }
                  padding="3"
                  borderRadius="5"
                  paddingRight="10"
                  paddingLeft="10"
                  FontawesomeColor="red"
                  textFontWeight="500"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="guestPage__btc"
          style={{ opacity: theme === "Dark" ? "0.5" : "0.2" }}
        >
          <Text text="$BTC" />
        </div>
        <div
          className="guestPage__icon"
          style={{ opacity: theme === "Dark" ? "0.5" : "0.2" }}
        >
          <div className="guestPage__icon-div">
            <div>
              <CommunityBtn
                //   color="#3861FB"
                FontawesomeColor={theme === "Dark" ? "#808a9d" : ""}
                fontAwesome="fa-solid fa-image"
                FontawesomeFontsize="19"
              />
            </div>
            <div style={{ color: theme === "Light" ? "" : "#808a9d" }}>
              <CommunityBtn
                fontAwesome="fa-solid fa-gift"
                FontawesomeFontsize="19"
              />
            </div>
            <div>
              <CommunityBtn
                fontAwesome="fa-solid fa-face-smile"
                FontawesomeColor={theme === "Dark" ? "#808a9d" : ""}
                //   color="#3861FB"
                FontawesomeFontsize="19"
              />
            </div>
            <div>
              <CommunityBtn
                fontAwesome="fa-solid fa-chart-simple"
                FontawesomeColor={theme === "Dark" ? "#808a9d" : ""}
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
              padding="7"
              paddingRight="17"
              paddingLeft="15"
              textFontWeight="400"
              //   color="#3861FB"
              borderRadius="5"
              BGcolor="#3861FB"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestPage;
