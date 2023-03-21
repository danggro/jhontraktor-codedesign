import React from "react";

function Arrow({ variant }) {
  const variants = {
    black: "#000",
    white: "#fff",
  };

  const pickedVariant = variants[variant];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      fill="none"
      viewBox="0 0 25 26"
      className="origin-left scale-75 2xl:scale-100"
    >
      <path
        stroke={pickedVariant}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.5 23.417c5.753 0 10.417-4.664 10.417-10.417S18.253 2.583 12.5 2.583 2.083 7.247 2.083 13 6.747 23.417 12.5 23.417z"
      ></path>
      <path
        stroke={pickedVariant}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.5 17.167L16.667 13 12.5 8.833M8.333 13h8.334"
      ></path>
    </svg>
  );
}

export default Arrow;
