import React from "react";
import "./css/latest_trek.css";

import mobile_hills from "./data/mobile+hills.jpg";
import both from "./data/both.jpg";
import hills from "./data/hills.jpg";

function LatestTrek() {
  return (
    <section className="latest_trek">
      <h1 className="upcoming_trek">UPCOMING TREKS</h1>
      <div className="trek_list">
        <div className="row">
          <div className="trek_img col-lg-4">
            <img src={hills} className="im col-lg-12" alt="Responsive img" />
            <h3>Name: Visapur</h3>
            <h5>Height: 1,084 m (3,556 ft)</h5>
            <h5>Date: 22 feb 2020</h5>
            <h5>Difficulty: Easy</h5>

            <div className="details_button">
              <a href="#" className="myButton">
                Details
              </a>
            </div>
          </div>
          <div className="trek_img col-lg-4">
            <img src={both} className="im col-lg-12" alt="no added" />
            <h3>Name: Kalsubai</h3>
            <h5>Height: 1646 m (5400 ft)</h5>
            <h5>Date: 11 sept 2020</h5>
            <h5>Difficulty: Easy</h5>
            <div className="details_button">
              <a href="#" className="myButton">
                Details
              </a>
            </div>
          </div>
          <div className="trek_img col-lg-4">
            <img src={mobile_hills} className="im col-lg-12" alt="no added" />
            <h3>Name: Kalsubai</h3>
            <h5>Height: 1646 m (5400 ft)</h5>
            <h5>Date: 11 sept 2020</h5>
            <h5>Difficulty: Easy</h5>
            <div className="details_button">
              <a href="#" className="myButton">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestTrek;
