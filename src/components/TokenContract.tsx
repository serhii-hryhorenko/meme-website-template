import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import TokenAddressButton from "./TokenAddressButton";
import "./TokenContract.scss";

interface TokenContractProps {
  address: string;
}

const TokenContract: React.FC<TokenContractProps> = ({ address }) => {
  const [tooltipText, setTooltipText] = useState("Click to copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setTooltipText("Copied!");
  };

  const handleMouseLeave = () => {
    setTimeout(() => setTooltipText("Click to copy"), 200);
  };

  return (
    <div className="token-contract">
      <p>Token Contract:</p>
      <div
        className="token-address"
        data-tooltip-id="copy-tooltip"
        data-tooltip-content={tooltipText}
        data-tooltip-variant="dark"
        onClick={handleCopy}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        {address}
      </div>

      <Tooltip id="copy-tooltip" variant="dark" place="top" />

      <div className="see-contract-button">
        <TokenAddressButton />
      </div>
    </div>
  );
};

export default TokenContract;
