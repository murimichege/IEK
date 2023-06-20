/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Rectangle = ({ style }) => {
  return (
    <svg
      className="rectangle"
      style={style}
      fill="none"
      height="1"
      viewBox="0 0 105 1"
      width="105"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M0 0H105V1H0V0Z" fill="black" />
    </svg>
  );
};
