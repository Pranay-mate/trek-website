import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import cloud_mountains from "./data/clouds+mountains.jpg";
import groups from "./data/group.jpg";
import hills from "./data/hills.jpg";

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slideimg">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cloud_mountains}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>NEW EXPERIANCE</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={groups} alt="Second slide" />

          <Carousel.Caption>
            <h3>NEW TRIP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hills} alt="Third slide" />

          <Carousel.Caption>
            <h3>NEW ADVENTURE</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
