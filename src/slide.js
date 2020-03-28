import React from "react";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb
} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cloud_mountains from "./data/clouds+mountains.jpg";
import groups from "./data/group.jpg";
import hills from "./data/hills.jpg";

function Slide() {
  return (
    <div className="slideimg">
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        dynamicHeight={true}
      >
        <div>
          <img src={cloud_mountains} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={groups} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={hills} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slide;
