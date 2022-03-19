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
        strokeWidth="10"
        strokeDasharray="105"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { Loader };