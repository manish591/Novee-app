import React from "react";

const Loader = () => {
  return (
    <svg
      width="450px"
      height="450px"
      viewBox="0 0 156 156"
      xmlns="http://www.w3.org/2000/svg"
      className="loader"
    >
      <circle
        cx="78"
        cy="78"
        r="50"
        fill="transparent"
        stroke-width="10"
        stroke-dasharray="105"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { Loader };