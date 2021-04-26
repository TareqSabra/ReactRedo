import React from "react";
import "./iteGrid.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function ItemGrid({ gridItems }) {
  return (
    <div className="containorGrid">
      {gridItems.map((item, index) => {
        return (
          <div className="gridItemS">
            <Link to={{ pathname: "/Products", st: item }}>
              <img alt="" src={item.image} />
              <br />
              <div className="itemName">{item.imagesTitel}</div>
            </Link>
            <div className="font-weight-bold itemPrice">
              {"$" + item.itemPrice}
            </div>
          </div>
        );
      })}
    </div>
  );
}
