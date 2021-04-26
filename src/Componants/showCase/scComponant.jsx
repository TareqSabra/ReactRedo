import { LaptopTablet } from "../../Resources/data/LaptopTablet";
import { AudioSound } from "../../Resources/data/AudioSound";
import { gridItems } from "../../Resources/data/griditems";
import Carousel from "../Carousal/carousalComponant";
import Ad from "../adComponant/ad";
import ItemGrid from "../ItemGrid/itemGrid";
import React from "react";
import "../showCase/sC.scss";
function scComponant(props) {
  return (
    <div id="containor">
      <div className="d-flex justify-content-center showCase-Carousel">
        <div className="Carousel">
          <div className="Titel">LAPTOPS & TAPLETS</div>
          <div className="titelSpacer" />
          <div className="divder" />
          <Carousel itemList={LaptopTablet}></Carousel>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="Carousel">
          <div className="Titel">Audio & Sound</div>
          <div className="titelSpacer" />
          <div className="divder" />
          <Carousel itemList={AudioSound}></Carousel>
        </div>
      </div>
      <Ad adText="hey i'm an ad" adlink="#"></Ad>
      <div className="d-flex justify-content-center">
        <div className="Carousel">
          <div className="Titel">Camera & Lens</div>
          <div className="titelSpacer" />
          <div className="divder" />
          <ItemGrid gridItems={gridItems}></ItemGrid>
        </div>
      </div>
    </div>
  );
}
export default scComponant;
