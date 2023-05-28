import React, { useContext } from "react";
import ThemeComp from "../ThemeComp/ThemeComp";
import "./blogpost.css";
import { ThemeContext } from "../../../context/ThemeContext";

const BlogPost = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="blogPost"
        style={{
          backgroundColor: theme === "Light" ? "#F8FAFD" : "#171924",
          border: theme == "Light" ? "1px solid #F0F3F6" : "1px solid #2C2E3D",
        }}
      >
        <div>
          <ThemeComp firstText="Top" secondText="Latest" />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
