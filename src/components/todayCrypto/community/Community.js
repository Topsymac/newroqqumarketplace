import React, { useContext } from "react";
import Text from "../../../atoms/text/Text";
import { Link } from "react-router-dom";
import "./community.css";
import { ThemeContext } from "../../../context/ThemeContext";
import Logo from "../../../Images/roqqu-color.svg";
import Logowhite from "../../../Images/Logo-White.png";
import communityArticleImg from "../../../Images/article communtity.png";
import HelloArticleImg from "../../../Images/62739f727d1c136ae384201f.png";
import communityAccount1 from "../../../Images/8277c31cdcc64aca8e5b002a710f06b0.png";
import communityAccount2 from "../../../Images/62cf664ffa2fdf1d6f615aca.png";
import communityAccount3 from "../../../Images/fa0cdb0ffe8848b49e12ba2889769b33.png";
import certifiedIcon from "../../../Images/certified.svg";
import CommunityBtn from "../../community component/community atom/community btn/CommunityBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Community = () => {
  const { theme } = useContext(ThemeContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
  };
  // autoplay: true,

  return (
    <>
      <div
        className="community"
        style={{
          backgroundColor: theme === "Light" ? "#FFF" : "#323546 ",
          boxShadow: theme === "Light" ? ["rgba(88, 102, 126, 0.08) 0px 4px 24px",
      "rgba(88, 102, 126, 0.12) 0px 1px 2px"]:""
        }}
      >
        <Slider {...settings}>
          {/* item 1  */}
          <div>
            <div>
              <div>
                <div>
                  <div className="">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-baseline">
                        <div>
                          <i
                            className="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "gold" }}
                          ></i>
                        </div>
                        <div className="mx-3">
                          <b style={{ fontWeight: "bold", fontSize: "17px" }}>
                            <Text text="Top Community Post" />
                          </b>
                          {/* <p>Recently Added</p> */}
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            color: "#3861FB",
                          }}
                        >
                          <Link
                            className="d-flex align-items-center"
                            to="recently-added-coin"
                            style={{
                              textDecoration: "none",
                              color: "#3861FB",
                              fontWeight: "500",
                            }}
                          >
                            <Text text="More" />
                            <i
                              className="fa fa-angle-right mx-2"
                              aria-hidden="true"
                              style={{ fontWeight: "bold", fontSize: "12px" }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src={theme === "Dark" ? Logo : Logo}
                          alt="Logo"
                          style={{ width: "90px", height: "20px" }}
                        />
                        <div
                          className="guestPost__logoText"
                          style={{
                            color: theme === "Light" ? "#A6B0C3" : "#7E859B ",
                            marginLeft: "30px",
                            fontWeight: "500",
                          }}
                        >
                          <Text text="3.1M followers" />
                        </div>
                      </div>
                      <p className="my-1 mx-4">
                        Nigerian crypto exchange Roqqu receives European virtual
                        currency license...
                      </p>
                      <div className="community__likes">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="">
                            {/* <i className="fa-solid fa-retweet"></i> */}
                            <span
                              className="mx-1"
                              style={{
                                color:
                                  theme === "Light" ? "#A6B0C3" : "#7E859B ",
                              }}
                            >
                              May 15
                            </span>
                          </div>
                          <div>
                            <i
                              className="fa-solid fa-circle"
                              style={{ fontSize: "5px", height: "15px" }}
                            ></i>
                          </div>
                          <div className="mx-1">
                            <i className="fa-regular fa-comment-dots"></i>
                            {/* <IoChartboxEllipses /> */}
                            <span className="mx-1">75</span>
                          </div>
                          <div>
                            <i
                              className="fa-solid fa-circle"
                              style={{ fontSize: "5px", height: "15px" }}
                            ></i>
                          </div>

                          <div className="mx-1">
                            <i className="fa-solid fa-heart"></i>
                            <span className="mx-1">351</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item 1  */}
          <div>
            <div>
              <div>
                <div>
                  <div
                    className=""
                    style={{
                      backgroundColor: theme === "Light" ? "#FFF" : "#323546 ",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-baseline">
                        <div>
                          <i
                            className="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "gold" }}
                          ></i>
                        </div>
                        <div className="mx-3">
                          <b style={{ fontWeight: "bold", fontSize: "17px" }}>
                            <Text text="Top Community Article" />
                          </b>
                          {/* <p>Recently Added</p> */}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                          <Link
                            className="d-flex align-items-center"
                            to="recently-added-coin"
                            style={{
                              textDecoration: "none",
                              color: "#3861FB",
                              fontWeight: "500",
                            }}
                          >
                            <Text text="More" />
                            <i
                              className="fa fa-angle-right mx-2"
                              aria-hidden="true"
                              style={{ fontWeight: "bold", fontSize: "12px" }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          src={communityArticleImg}
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div>
                        <div>
                          <div className="d-flex align-items-center mx-3">
                            <img
                              src={
                                theme === "Dark"
                                  ? HelloArticleImg
                                  : HelloArticleImg
                              }
                              alt="Logo"
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "100%",
                              }}
                            />
                            {/* <i className="fa-sharp fa-solid fa-badge-check"></i> */}
                            <div
                              className="mx-2"
                              style={{
                                color:
                                  theme === "Light" ? "#6C788D" : "#A1A7BB",
                              }}
                            >
                              <Text text="HELLO" />
                            </div>
                          </div>
                          <p
                            className="mt-2 mx-3 w-80"
                            style={{ fontSize: "15px", marginBottom: "0px" }}
                          >
                            How Roqqu selects which killer project make the snow
                          </p>
                          <div className="community__article-likes">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                {/* <i className="fa-solid fa-retweet"></i> */}
                                <span
                                  style={{
                                    color:
                                      theme === "Light"
                                        ? "#A6B0C3"
                                        : "#7E859B ",
                                  }}
                                >
                                  May 5
                                </span>
                              </div>
                              <div className="mx-1">
                                <i
                                  className="fa-solid fa-circle"
                                  style={{ fontSize: "5px", height: "15px" }}
                                ></i>
                              </div>
                              <div className="mx-1">
                                <i className="fa-regular fa-comment-dots"></i>
                                {/* <IoChartboxEllipses /> */}
                                <span className="mx-1">2</span>
                              </div>
                              <div>
                                <i
                                  className="fa-solid fa-circle"
                                  style={{ fontSize: "5px", height: "15px" }}
                                ></i>
                              </div>

                              <div className="mx-1">
                                <i className="fa-solid fa-heart"></i>
                                <span className="mx-1">1</span>
                              </div>
                              <div
                                style={{
                                  backgroundColor:
                                    theme === "Light" ? "#EAEDF0" : "#323546",
                                  borderRadius: "20px",
                                  padding: "4px 8px",
                                }}
                              >
                                <div className="d-flex align-items-center">
                                  <img
                                    src={
                                      theme === "Dark"
                                        ? HelloArticleImg
                                        : HelloArticleImg
                                    }
                                    alt="Logo"
                                    style={{
                                      width: "15px",
                                      height: "15px",
                                      borderRadius: "100%",
                                    }}
                                  />
                                  {/* <i className="fa-sharp fa-solid fa-badge-check"></i> */}
                                  <div
                                    className="mx-1"
                                    style={{
                                      color:
                                        theme === "Light" ? "black" : "white",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    <Text text="HELLO" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item 3  */}
          <div>
            <div>
              <div>
                <div>
                  <div
                    className=""
                    style={{
                      backgroundColor: theme === "Light" ? "#FFF" : "#323546 ",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-baseline">
                        <div>
                          <i
                            className="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "gold" }}
                          ></i>
                        </div>
                        <div className="mx-3">
                          <b style={{ fontWeight: "bold", fontSize: "17px" }}>
                            <Text text="Top Community Accounts" />
                          </b>
                          {/* <p>Recently Added</p> */}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                          <Link
                            className="d-flex align-items-center"
                            to="recently-added-coin"
                            style={{
                              textDecoration: "none",
                              color: "#3861FB",
                              fontWeight: "500",
                            }}
                          >
                            <Text text="More" />
                            <i
                              className="fa fa-angle-right mx-2"
                              aria-hidden="true"
                              style={{ fontWeight: "bold", fontSize: "12px" }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={communityAccount1}
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                        <div>
                          <div className="d-flex mx-2 align-items-center">
                            <div
                              style={{ fontSize: "14px", fontWeight: "500" }}
                            >
                              <Text text="Roqqu" />
                            </div>
                            <div className="mx-1">
                              <img src={certifiedIcon} alt="" />
                            </div>
                            <div
                              className="text-secondary"
                              style={{ fontSize: "12px" }}
                            >
                              <Text text="@roqqupay" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <CommunityBtn
                          fontAwesome="fa fa-plus"
                          text="Follow"
                          // height="30"
                          // width="60"
                          paddingRight="23"
                          paddingLeft="23"
                          textFontsize="12"
                          //   color="#3861FB"
                          BGcolor={theme === "Light" ? "#E6E9EC" : "#222531"}
                          textColor={theme === "Light" ? "black" : "white"}
                          FontawesomeFontsize="10"
                          FontawesomeColor={
                            theme === "Light" ? "black" : "white"
                          }
                          textFontWeight="bold"
                        />
                      </div>
                    </div>
                    {/*  */}
                    <div className="d-flex align-items-center justify-content-between my-2">
                      <div className="d-flex">
                        <div>
                          <img
                            src={communityAccount2}
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                        <div className="d-flex mx-2 align-items-center">
                          <div style={{ fontSize: "14px", fontWeight: "500" }}>
                            <Text text="Roqqu" />
                          </div>
                          <div className="mx-1">
                            <img src={certifiedIcon} alt="" />
                          </div>
                          <div
                            className="text-secondary"
                            style={{ fontSize: "12px" }}
                          >
                            <Text text="@roqqupay" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <CommunityBtn
                          fontAwesome="fa fa-plus"
                          text="Follow"
                          // height="30"
                          // width="60"
                          paddingRight="23"
                          paddingLeft="23"
                          textFontsize="12"
                          //   color="#3861FB"
                          BGcolor={theme === "Light" ? "#E6E9EC" : "#222531"}
                          textColor={theme === "Light" ? "black" : "white"}
                          FontawesomeFontsize="10"
                          FontawesomeColor={
                            theme === "Light" ? "black" : "white"
                          }
                          textFontWeight="bold"
                        />
                      </div>
                    </div>
                    {/*  */}
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="d-flex">
                          <div>
                            <img
                              src={communityAccount3}
                              style={{
                                width: "25px",
                                height: "25px",
                                borderRadius: "10px",
                              }}
                            />
                          </div>
                          <div>
                            <div className="d-flex mx-2 align-items-center">
                              <div
                                style={{ fontSize: "14px", fontWeight: "500" }}
                              >
                                <Text text="Roqqu" />
                              </div>
                              <div className="mx-1">
                                <img src={certifiedIcon} alt="" />
                              </div>
                              <div
                                className="text-secondary"
                                style={{ fontSize: "12px" }}
                              >
                                <Text text="@roqqupay" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <CommunityBtn
                            fontAwesome="fa fa-plus"
                            text="Follow"
                            // height="30"
                            // width="60"
                            paddingRight="23"
                            paddingLeft="23"
                            textFontsize="12"
                            //   color="#3861FB"
                            BGcolor={theme === "Light" ? "#E6E9EC" : "#222531"}
                            textColor={theme === "Light" ? "black" : "white"}
                            FontawesomeFontsize="10"
                            FontawesomeColor={
                              theme === "Light" ? "black" : "white"
                            }
                            textFontWeight="bold"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Community;
