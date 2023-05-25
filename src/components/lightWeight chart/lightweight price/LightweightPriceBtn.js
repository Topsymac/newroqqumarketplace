import React from 'react'
import "./lightweightpricebtn.css";
const LightweightPriceBtn = ({ lightweightPriceBtn,white }) => {
  return (
    <>
      <div>
        <button className="btn lightweightPriceBtnDiv" style={{backgroundColor:`${white}`}}>
          <div className="lightweightPriceBtn">{lightweightPriceBtn}</div>
        </button>
      </div>
    </>
  );
};

export default LightweightPriceBtn
