import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Logo from "../../../Images/roqqu-color.svg";
import Logowhite from "../../../Images/Logo-White.png";
import "./guestpost.css";
import Text from "../../../atoms/text/Text";
import CommunityBtn from "../community atom/community btn/CommunityBtn";
import GuestPage from "./guest page/GuestPage";
// import certifiedIcon from "../../../Images/certified.svg";



// import ThemeComp from "../ThemeComp/ThemeComp"
const GuestPost = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="guestPost">
        <div
          className="guestPost__div"
          style={{
            backgroundColor: theme === "Light" ? "#F8FAFD" : "#202331",
          }}
        >
          <div className="guestPost__img-div">
            <img
              src={theme === "Dark" ? Logowhite : Logo}
              alt="Logo"
              // style={{ width: "100px", height: "25px" }}
              className="guestPost__img"
            />
            {/* <i className="fa-sharp fa-solid fa-badge-check"></i> */}
            <span
              className="guestPost__logoText"
              style={{ color: theme === "Dark" ? "#808a9d" : "#808a9d" }}
            >
              <Text text="3.1M followers" />
            </span>
          </div>
          <div>
            <CommunityBtn
              fontAwesome="fa fa-plus"
              text="Follow"
              paddingTop="8"
              paddingBottom="9"
              paddingLeft="12"
              paddingRight="12"
              borderRadius="5"
              // height="30"
              // width="60"
              textFontsize="12"
              //   color="#3861FB"
              BGcolor="#3861FB"
              textColor="white"
              FontawesomeFontsize="10"
              FontawesomeColor="white"
            />
          </div>
        </div>
        <div
          style={
            {
              // opacity: theme === "Light" ? "0.3" : "",
              // backgroundColor: theme === "Light" ? "#F8FAFD" : "#171924",
            }
          }
        >
          <div>
            <div>
              <GuestPage />
            </div>
          </div>
        </div>
        <div className="guestPost__overlay">
          <CommunityBtn
            text="Sign up to discuss"
            // padding="10"
            paddingTop="12"
            paddingLeft="25"
            paddingBottom="13"
            paddingRight="5"
            borderRadius="8"
            width="155"
            margin="auto"
            //   color="#3861FB"
            BGcolor="#3861FB"
            textColor="white"
            textFontWeight="bold"
            textFontsize="14"
          />
        </div>

        {/* <ThemeComp firstText="Top" secondText="Latest" /> */}
      </div>
    </>
  );
};

export default GuestPost;
