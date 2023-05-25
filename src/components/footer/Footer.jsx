import React from "react";
import "./Footer.css";
import appstore from "../../Images/Vector.svg";
import playstore from "../../Images/Vector (1).svg";
import roqquLogo from "../../Images/Logo-White.png";
import facebook from "../../Images/Facebook.png";
import instagram from "../../Images/Instagram.png";
import linkedin from "../../Images/LinkedIn.png";
import twitter from "../../Images/Twitter.png";
import arrow from "../../Images/arrow-left.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="storeLink">
        <div className="Appstore">
          <img src={appstore} alt="" />
        </div>
        <div className="Playstore">
          <img src={playstore} alt="" />
        </div>
      </div>
      <div className="footerRoqqu">
        <img src={roqquLogo} alt="" />
        {/* <p>Enter your email to get notified by Roqqu for latest updates.</p> */}
      </div>
      <div className="footerGrid">
        <div className="footerLeft">
          <p>Enter your email to get notified by Roqqu for latest updates.</p>
          <div className="footerInput">
            <input type="text" placeholder="email address" />
            <img src={arrow} alt="" />
          </div>
          <div className="footerLinks">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="footerRight ">
          <div className="grid-container">
            <div className="Grid-item">
              <ul>
                <h5>Product</h5>
                <li>Wallet</li>
                <li>Exchange</li>
                <li>Loans</li>
                <li>Virtual Card</li>
                <li>Savings</li>
              </ul>
            </div>
            <div className="Grid-item">
              <ul>
                <h5>Company</h5>
                <li>About</li>
                <li>Roqqu Hub</li>
              </ul>
              <ul>
                <h5>Resources</h5>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="Grid-item">
              <ul>
                <h5>Legal</h5>
                <li>Terms & conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        <div className="bottomLeft">
          <p> &copy; 2023 Roqqu Technologies Ltd. All rights reserved.</p>
        </div>
        <div className="bottomRight">
          <p>
            Roqqu is a fully regulated digital asset operator licensed in
            Lithuania by the Central Bank of Lithuania under Roqqu UAB
            Technologies with license number 305963619 operated legally accross
            28 countries across Europe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
