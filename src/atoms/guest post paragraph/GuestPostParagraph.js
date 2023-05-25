import React from "react";

const GuestPostParagraph = ({ text, readAll }) => {
  return (
    <>
      <div>
        <p style={{ margin: "0px", padding: "0px" }}>
          {text} ...
          <a href="#" style={{ textDecoration: "none" }}>
            {readAll}
          </a>
        </p>
      </div>
    </>
  );
};

export default GuestPostParagraph;
