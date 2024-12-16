import React, { useState } from "react";
import "./TokenAddressButton.scss";

const TokenAddressButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="147"
      height="147"
      viewBox="0 0 147 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <rect
        width="147"
        height="147"
        rx="73.5"
        className={isHovered ? "hovered" : ""}
        style={{
          transition: "fill 0.3s ease",
        }}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.5867 51.896C95.477 51.6907 95.3113 51.5227 95.106 51.413C90.2387 48.823 61.121 57.8483 53.589 62.193C51.6267 63.3247 50.7517 64.6547 50.992 66.1387C51.685 70.4367 63.2653 73.694 69.549 75.1523L81.3487 63.355C82.0323 62.6713 83.1407 62.6713 83.8243 63.355C84.508 64.0387 84.508 65.147 83.8243 65.8307L71.9103 77.74C73.406 84.089 76.6283 95.324 80.8587 96.0053C81.0173 96.031 81.176 96.045 81.3323 96.045C82.625 96.045 83.7917 95.1583 84.802 93.4083C89.1467 85.8833 98.179 56.7703 95.5867 51.896Z"
        className={isHovered ? "hovered" : ""}
        style={{
          transition: "fill 0.3s ease",
        }}
      />
    </svg>
  );
};

export default TokenAddressButton;
