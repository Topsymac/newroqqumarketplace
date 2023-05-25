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
          className="d-flex justify-content-between align-items-start"
          style={{
            backgroundColor: "#F8FAFD",
            padding: "15px 20px",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <div style={{ height: "40px" }}>
            <img
              src={theme === "Dark" ? Logowhite : Logo}
              alt="Logo"
              style={{ width: "100px", height: "25px" }}
            />
            {/* <i className="fa-sharp fa-solid fa-badge-check"></i> */}
            <span className="guestPost__logoText text-end mx-2">
              <Text text="3.1M followers" />
            </span>
          </div>
          <div>
            <CommunityBtn
              fontAwesome="fa fa-plus"
              text="Follow"
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
        <div>
          <div>
            <div>
              <GuestPage />
            </div>
          </div>
          <div className="card-img-overlay guestPost__overlay">
            <CommunityBtn
              text="Sign up to discuss"
              padding="10"
              paddingLeft="30"
              paddingRight="30"
              // width="170"
              margin="auto"
              //   color="#3861FB"
              BGcolor="#3861FB"
              textColor="white"
              textFontWeight="bold"
              textFontsize="15"
            />
          </div>
        </div>
        {/* <ThemeComp firstText="Top" secondText="Latest" /> */}
      </div>
    </>
  );
};

export default GuestPost;
