import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext"
import "./guestpostuser.css";
import ImgNfontAwesome from "../../../../atoms/imgNfontawesome/ImgNfontAwesome";
import Text from "../../../../atoms/text/Text";
import CommunityBtn from "../../community atom/community btn/CommunityBtn";
import GuestPostParagraph from "../../../../atoms/guest post paragraph/GuestPostParagraph";
import { FaEllipsisH } from "react-icons/fa";
import certifiedIcon from "../../../../Images/certified.svg";
// import { IoChartboxEllipses } from "react-icons";


const GuestPostUser = ({
  id,
  userTag,
  nameText,
  dateText,
  paragraphtext,
  img,
  fontAwesome,
  fontAwesomeWidth,
  fontAwesomeHeight,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const handleClick = () => {
    if (showDropDown) {
      setShowDropDown(false);
    }
  };
    const { theme } = useContext(ThemeContext);
  console.log(fontAwesome);
  return (
    <>
      <div
        className="d-flex GuestPostUser mt-4 mx-4"
        id={id}
        onClick={handleClick}
      >
        <div>
          <div>
            {/* <img style={{ height: "40px" }}
              src={theme === "Dark" ? Logowhite : Logo}
              alt="Logo"
              style={{ width: "100px", height: "25px" }}
            />*/}
            <div className="d-flex align-items-center mb-3">
              <div>
                <ImgNfontAwesome
                  img={img}
                  fontAwesome={fontAwesome}
                  fontAwesomeWidth={fontAwesomeWidth}
                  fontAwesomeHeight={fontAwesomeHeight}
                />
              </div>
              <div className="mx-2">
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    style={{
                      color: theme === "Light" ? "black" : "white",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    <Text text={nameText} />
                  </div>
                  <div>
                    {/* <i className="fa-sharp fa-solid fa-badge-check"></i> */}
                    <div
                      className="mx-1 align-self-start"
                      style={{ height: "30px" }}
                    >
                      <img
                        src={certifiedIcon}
                        alt=""
                        style={{ height: "15px", width: "15px" }}
                      />
                    </div>
                  </div>
                  <div
                    className="mx-1"
                    style={{ color: "#808A9D", fontSize: "13px" }}
                  >
                    <Text text={dateText} />
                  </div>
                </div>

                <span style={{ color: "#808A9D", fontSize: "13px" }}>
                  <Text text={userTag} />
                </span>
              </div>
            </div>
            {/* post paragraph */}
            <div
              style={{
                color: theme === "Light" ? "black" : "white",
                fontSize: "16px",
                width: "300px !important",
              }}
            >
              <GuestPostParagraph text={paragraphtext} readAll="Read all" />
              {/* <a href="#" >
                Read all
              </a> */}
            </div>
            {/* <i class="fa-solid fa-heart"></i> */}
            <div
              className="mt-3 GuestPostUser__socials"
              style={{
                color: "#808A9D",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              <div className="d-flex justify-content-between">
                <div className="GuestPostUser__fa-comment-dots">
                  <i className="fa-regular fa-comment-dots"></i>
                  {/* <IoChartboxEllipses /> */}
                  <span className="mx-1">75</span>
                </div>
                <div className="GuestPostUser__fa-retweet">
                  <i className="fa-solid fa-retweet"></i>
                  <span className="mx-1">12</span>
                </div>
                <div className="GuestPostUser__fa-heart">
                  <i className="fa-solid fa-heart"></i>
                  <span className="mx-1">351</span>
                </div>
                <div>
                  <div>
                    <div
                      className="GuestPostUser__drop-icon"
                      onClick={() =>
                        setShowDropDown((showDropDown) => !showDropDown)
                      }
                    >
                      <FaEllipsisH />
                    </div>
                    {showDropDown && (
                      <div className="GuestPostUser__dropDown-items">
                        <div>
                          <button className="dropdown-item">
                            <i
                              className="fa-solid fa-plus"
                              style={{ fontSize: "17px" }}
                            ></i>
                            <span className="mx-3" style={{ color: "black" }}>
                              Follow
                            </span>
                          </button>
                          <button className="dropdown-item">
                            <i
                              className="fa-solid  fa-share-nodes"
                              style={{ fontSize: "17px" }}
                            ></i>
                            <span className="mx-3" style={{ color: "black" }}>
                              Share to twitter
                            </span>
                          </button>
                          <button className="dropdown-item">
                            <i
                              className="fa-solid fa-copy"
                              style={{ fontSize: "17px" }}
                            ></i>
                            <span className="mx-3" style={{ color: "black" }}>
                              Copy link
                            </span>
                          </button>
                          <button className="dropdown-item">
                            <i
                              className="fa-solid fa-face-frown"
                              style={{ fontSize: "17px" }}
                            ></i>
                            <span className="mx-3" style={{ color: "black" }}>
                              I'm not intrested in this post
                            </span>
                          </button>
                          <button className="dropdown-item">
                            <i
                              className="fa-solid fa-flag"
                              style={{ fontSize: "17px" }}
                            ></i>
                            <span className="mx-3" style={{ color: "black" }}>
                              Report post
                            </span>
                          </button>
                          <button className="dropdown-item">
                            <i
                              className="fa-solid fa-flag"
                              style={{ fontSize: "17px" }}
                            ></i>
                            <span className="mx-3" style={{ color: "black" }}>
                              Report {userTag}
                            </span>
                          </button>
                          <button className="dropdown-item">
                            <i
                              className="fa-solid fa-ban"
                              style={{ fontSize: "17px" }}
                            ></i>
                            <span className="mx-3" style={{ color: "black" }}>
                              Block {userTag}
                            </span>
                          </button>
                        </div>
                        <div className="GuestPostUser__triangle"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/* <i class="fa-solid fa-share-nodes"></i> */}
            {/* <i class="fa-solid fa-copy"></i> */}
            {/* <i class="fa-solid fa-face-pensive"></i> sad face */}
            {/* <i class="fa-solid fa-flag"></i> */}
            {/* <i class="fa-solid fa-ban"></i> */}
          </div>
        </div>
        <div>
          <CommunityBtn />
        </div>
      </div>
    </>
  );
};

export default GuestPostUser;
