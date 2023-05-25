import React, { useContext } from "react";
import ThemeComp from "../ThemeComp/ThemeComp";
import "./blogpost.css";
import { ThemeContext } from "../../../context/ThemeContext";

const BlogPost = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="card w-100 blogPost"
        style={{
          backgroundColor: theme === "Light" ? "#F8FAFD" : "#171924",
          borderColor: theme === "Light" ? "#F0F3F6" : "#2C2E3D",
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
