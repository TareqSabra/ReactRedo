import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import "./ad.scss";
function Ad({ adText, adlink }) {
  return (
    <div className="Containor">
      <div className="adContainor">
        <span>{adText}</span>
        <div className="adLearnMore">
          <a className="adLinkS" href={adlink}>
            Learn More
            <ArrowForwardIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Ad;
