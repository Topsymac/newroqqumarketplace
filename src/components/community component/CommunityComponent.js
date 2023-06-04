import React, { useContext } from "react";
import Text from "../../atoms/text/Text";
import { Link } from "react-router-dom";
import BlogPost from "./blog post/BlogPost";

import "./communitycomponent.css";
import GuestPost from "./guest post/GuestPost";
import { ThemeContext } from "../../context/ThemeContext";

const CommunityComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div className="communityComponent">
          <div classame="">
            <div
              className="communityComponent__div"
              style={{ color: theme === "Dark" ? "white" : "" }}
            >
              <div className="communityComponent__Header">
                <Text text="Community" />
              </div>
              <div>
                <div className="communityComponent__Link-div">
                  <Link className="communityComponent__Link" to="/">
                    <Text text="View on Community" />
                    <i
                      className="fa fa-angle-right communityComponent__fontawesome-right"
                      aria-hidden="true"
                      // style={{
                      //   fontWeight: "bold",
                      //   fontSize: "12px",
                      //   marginLeft: "7px",
                      // }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="communityComponent__card">
            <div
              className="communityComponent__guestPost"
              style={{
                border:
                  theme == "Light" ? "1px solid #F0F3F6" : "1px solid #2C2E3D",
                backgroundColor: theme == "Light" ? "#F0F3F6" : "#2C2E3D",
                // borderRadius: "13px",
              }}
            >
              <GuestPost />
            </div>
            <div>
              <BlogPost firstText="top" secondText="latest" />
            </div>
            {/* style=
            {{
              backgroundColor:
                theme === "Light" ? "#EFF2F5" : "#171924 !important",
              // borderRadius: "13px",
            }} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityComponent;
