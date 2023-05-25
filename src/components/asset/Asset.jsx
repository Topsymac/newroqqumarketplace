import React, { useContext } from "react";
import AssetTable from "./AssetTable";
import NavAsset from "./NavAsset";
import { ThemeContext } from "../../context/ThemeContext";

const Asset = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "Light" ? "#FFF" : "hsl(235, 21%, 11%)",
        color: theme === "Light" ? "black" : "white",
        hover: theme === "Light" ? "orange" : "blue",
      }}
    >
      <NavAsset />
      <AssetTable />
    </div>
  );
};

export default Asset;
