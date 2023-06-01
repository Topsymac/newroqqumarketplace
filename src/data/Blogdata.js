// import React from 'react'
import blogImg1 from "../Images/bb4b41aa19144696b058eefeea4cb9ac.png";
import blogImg2 from "../Images/9e2b688d07f24744a636e7d969810f1b.png";
import blogImg3 from "../Images/ad3f9146fec148aaa85ed86a2065f2b2.png";

const idFunction = ()=>{
 return Math.floor(Math.random() * 1000) + 1;
}

const Blogdata = [
  {
    id: idFunction(),
    img: blogImg1,
    blogUser: "crypto.news",
    certified: "fa-solid fa-badge-check",
    dateText: "· 11h",
    userTag: "@cryptonews",
    paragraphtext:
      "In a recent event, an equivalent of million worth of bitcoin was withdrawn from the",
  },
  {
    id: idFunction(),
    img: blogImg2,
    blogUser: "CRYPTOTAG",
    certified: "fa-solid fa-badge-check",
    dateText: "· 8h",
    userTag: "@CRYPTOTAG",
    paragraphtext: "New ATH‼️: 2,851,817.227 BTC has not moved for 2y-3y.",
  },
  {
    id: idFunction(),
    img: blogImg3,
    blogUser: "Satechainmedia",
    certified: "fa-solid fa-badge-check",
    dateText: "· May 8",
    userTag: "@Satechainmedia",
    paragraphtext:
      "Bitcoin is experiencing a very high demand for block space, driven by the BRC-20 token, using text-based inscriptions, and ordinal",
  },
  {
    id: idFunction(),
    img: blogImg1,
    blogUser: "crypto.news",
    certified: "fa-solid fa-badge-check",
    dateText: "· 11h",
    userTag: "@cryptonews",
    paragraphtext:
      "In a recent event, an equivalent of million worth of bitcoin was withdrawn from the",
  },
  {
    id: idFunction(),
    img: blogImg2,
    blogUser: "CRYPTOTAG",
    certified: "fa-solid fa-badge-check",
    dateText: "· 8h",
    userTag: "@CRYPTOTAG",
    paragraphtext: "New ATH‼️: 2,851,817.227 BTC has not moved for 2y-3y.",
  },
];

export default Blogdata;
