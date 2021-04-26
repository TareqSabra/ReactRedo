import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./carousl.scss";
import React from "react";
function carousalComponant({ itemList }) {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const cItems = itemList.map((item, index) => {
    return (
      <React.Fragment>
        <Link to={{ pathname: "/Products", st: item }}>
          <img className="itemPicture" alt="ProductImg" src={item.image} />
        </Link>
        <br />
        <Link to={{ pathname: "/Products", st: item }}>
          <div className="font-weight-bold itemTitle">{item.imagesTitel}</div>
        </Link>
        <br />
        <div className="font-weight-bold itemPrice">{"$" + item.itemPrice}</div>
      </React.Fragment>
    );
  });
  return (
    <AliceCarousel
      mouseTracking
      disableDotsControls={true}
      items={cItems}
      responsive={responsive}
    />
  );
}

export default carousalComponant;
