import React from "react";

const GuestPostParagraph = ({ text, readAll }) => {
  return (
    <>
      <div>
        <p style={{ margin: "0px", padding: "0px",fontSize:"14px" }}>
          {text} ...
          <a href="#" style={{ textDecoration: "none", color: "#3459E7" }}>
            {readAll}
          </a>
        </p>
      </div>
    </>
  );
};

export default GuestPostParagraph;
