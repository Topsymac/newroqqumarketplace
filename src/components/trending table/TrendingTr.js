import React from "react";
import "./trendingTr.css";

const TrendingTr = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  // text11,
  // text12,
  // text13
}) => {
  return (
    <>
      <div>
        <div>
          <div>
            <ul className="list-unstyled d-flex trendingTr">
              {/* <div className="d-flex justify-content-between">
                <li>{text1}</li>
                <li className="ml-3">{text2}</li>
                <li className="ml-3">{text3}</li>
              </div> */}
              <div className="d-flex justify-content-between">
                <li>{text1}</li>
                <li className="ml-3" style={{ paddingLeft: "100%" }}>
                  {text2}
                </li>
                <li className="" style={{ paddingLeft: "85%" }}>
                  {text3}
                </li>
              </div>

              <div
                className="d-flex justify-content-between align-items-start w-100"
                style={{ paddingLeft: "39%" }}
              >
                <li>{text4}</li>
                <li>{text5}</li>
                <li>{text6}</li>
                {/* <li style={{whiteSpace:"nowrap" }}>{text7}</li> */}
                {/* style={{ paddingLeft: "25%" }} */}
                {text7 ? <li>{text7}</li> : ""}
                <li>{text8}</li>
                <li>{text9}</li>
                <li>{text10}</li>
              </div>
              {/* <li>{text11}</li>
              <li>{text12}</li>
              <li>{text13}</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingTr;
