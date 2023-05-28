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
            backgroundColor: theme === "Light" ? "#F8FAFD" : "#171924",
            padding: "15px 20px",
            borderTopLeftRadius: "13px",
            borderTopRightRadius: "13px",
          }}
        >
          <div style={{ height: "40px" }}>
            <img
              src={theme === "Dark" ? Logowhite : Logo}
              alt="Logo"
              style={{ width: "100px", height: "25px" }}
            />
            {/* <i className="fa-sharp fa-solid fa-badge-check"></i> */}
            <span
              className="guestPost__logoText"
              style={{ color: theme === "Dark" ? "#808a9d" : "black" }}
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
          style={{
            opacity: theme === "Light" ? "0.2" : "0.2",
          }}
        >
          <div>
            <div>
              <GuestPage />
            </div>
          </div>
        </div>
        <div className="card-img-overlay guestPost__overlay">
          <CommunityBtn
            text="Sign up to discuss"
            padding="10"
            paddingLeft="40"
            paddingBottom="12"
            // paddingRight="30"
            borderRadius="5"
            width="170"
            margin="auto"
            //   color="#3861FB"
            BGcolor="#3861FB"
            textColor="white"
            textFontWeight="bold"
            textFontsize="15"
          />
        </div>

        {/* <ThemeComp firstText="Top" secondText="Latest" /> */}
      </div>
    </>
  );
};

export default GuestPost;
