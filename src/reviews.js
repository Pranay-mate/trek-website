import React, { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import cloud_mountains from "./data/clouds+mountains.jpg";
import groups from "./data/group.jpg";
import hills from "./data/hills.jpg";
import "./css/review.css";

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="review" activeIndex={index} onSelect={handleSelect} pause={true}>
      <div className="review_heading"><h1>REVIEWS</h1></div>
      <Carousel.Item>
        <div class="row">
          <div className="col-lg-6">
            <img className="rounded-circle" src={cloud_mountains} alt="Generic placeholder image" width="140" height="140" />
            <h2>Velas Turtle Festival</h2>
            <p>We had a wonderful experience with Terks and trails for our Velas Turtle festival tour. Arrangements were good, tour guide was responsible and cooperative. Me and my toddler were quite comfortable for the entire tour.</p>

          </div>
          <div class="col-lg-6">
            <img className="rounded-circle" src={hills} alt="Generic placeholder image" width="140" height="140" />
            <h2>Kalsubai Night Trek</h2>
            <p>Hi guys, Posting for may11-12,2019 Kalsubai trek With Affan as trek leader and his assistants. Have to say the trek experience was something out of the world. All the arrangements were spot on and well planned.</p>

          </div>

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="row">
      <div className="col-lg-6">
            <img className="rounded-circle" src={cloud_mountains} alt="Generic placeholder image" width="140" height="140" />
            <h2>Velas Turtle Festival</h2>
            <p>We had a wonderful experience with Terks and trails for our Velas Turtle festival tour. Arrangements were good, tour guide was responsible and cooperative. Me and my toddler were quite comfortable for the entire tour.</p>

          </div>
          <div class="col-lg-6">
            <img className="rounded-circle" src={hills} alt="Generic placeholder image" width="140" height="140" />
            <h2>Kalsubai Night Trek</h2>
            <p>Hi guys, Posting for may11-12,2019 Kalsubai trek With Affan as trek leader and his assistants. Have to say the trek experience was something out of the world. All the arrangements were spot on and well planned.</p>

          </div>

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="row">
      <div className="col-lg-6">
            <img className="rounded-circle" src={cloud_mountains} alt="Generic placeholder image" width="140" height="140" />
            <h2>Velas Turtle Festival</h2>
            <p>We had a wonderful experience with Terks and trails for our Velas Turtle festival tour. Arrangements were good, tour guide was responsible and cooperative. Me and my toddler were quite comfortable for the entire tour.</p>

          </div>
          <div class="col-lg-6">
            <img className="rounded-circle" src={hills} alt="Generic placeholder image" width="140" height="140" />
            <h2>Kalsubai Night Trek</h2>
            <p>Hi guys, Posting for may11-12,2019 Kalsubai trek With Affan as trek leader and his assistants. Have to say the trek experience was something out of the world. All the arrangements were spot on and well planned.</p>

          </div>

        </div>
      </Carousel.Item>
    </Carousel>

  );
}

export default Slide;
