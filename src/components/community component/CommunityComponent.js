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
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="communityComponent__Header">
                <Text text="Community" />
              </div>
              <div>
                <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                  <Link
                    className="d-flex align-items-center communityComponent__Link"
                    to="/"
                  >
                    <Text text="View on Community" />
                    <i
                      className="fa fa-angle-right mx-2"
                      aria-hidden="true"
                      style={{ fontWeight: "bold", fontSize: "12px" }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="communityComponent__card">
            <div className="card w-100 communityComponent__guestPost">
              <GuestPost />
            </div>
            <div
              style={{
                backgroundColor: theme === "Light" ? "#EFF2F5" : "#171924 !important",
              }}
            >
              <BlogPost firstText="top" secondText="latest" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityComponent;
