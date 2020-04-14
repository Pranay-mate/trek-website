import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import cloud_mountains from "./data/clouds+mountains.jpg";
import groups from "./data/group.jpg";
import hills from "./data/hills.jpg";
import "./css/review.css";

function AboutUs() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="about_us">
      <div id="company" class="The_company">
        <h1>The Company</h1>
        <p>
          Treks and Trails India was established in 2012. An initiative to trek
          and be with nature. Yet it's not just another trekking group. The
          basic funda being - do the ordinary in an extraordinary way. Meeting
          like minded individuals. Sharing best practices and to evolve as the
          foremost community in conducting trekking activities. Treks and Trails
          India believe in Leave no Trace policy while conducting all its
          events. Grievance / Feedback: Equal opportunity is provided to hear
          any grievance during and as well as after the event. Treks and Trails
          India will accept all feedback constructively. Feel Free to email us
          connect@treksandtrails.org Membership currently no membership fee is
          charged. However participants are required to pay for each event.
          Participants between the age of 12 -18 years may participate with
          parental consent. Or if accompanied with an adult. Treks and Trails
          India is a growing outdoor and adventure company in Maharashtra India.
          Trek sand Trails India caters to various activities such as Trekking,
          Forest trails, Cycling, High altitude trekking, Camping, River
          Rafting, Paragliding, Suba diving, Andaman tours, Tiger Safari,
          Cycling events, Corporate team building events, Astro Photography. We
          also conduct awareness about rural developmental. Assist as volunteers
          for a beach cleanup and conducting free Medical camps in rural
          Maharashtra. Over 5000 people have been through the TreksandTrails
          experience over the last 2 years from schools kids to corporate groups
          to adventure seekers to mountain explores, even senior citizens to
          Tadoba Tiger reserve with the experience for our leaders in outdoors
          activities, our aim is to be ideal adventure company for you. Your
          safety is our priority, Our outdoor Leaders have significant
          experience with outdoor activities and work very hard to make each
          event a safe and enjoyable experience for everyone. Basic First aid
          box is always available during our treks.
        </p>
      </div>
      <div className="The_Team">
        <Carousel
          id="Reviews"
          className="review"
          activeIndex={index}
          onSelect={handleSelect}
          pause={true}
        >
          <Carousel.Item>
            <div class="">
              <div className="review_headline">
                <h1>THE TEAM</h1>
              </div>
              <div className="image_box">
                <img
                  className="rounded-circle"
                  src={cloud_mountains}
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
              </div>
              <p className="reviewer_name">Pranay</p>
              <h2>FOUNDER</h2>
              <p>
                An analyst during the week and trek leader by the weekend.
                Trekking and conquering the sahyadri peaks since the past 4
                years. Famously known as the Czar of Kalsubai Shikhar. He's one
                of the most efficacious, good humored & natured trek leader.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="">
              <div className="review_headline">
                <h1>THE TEAM</h1>
              </div>
              <div className="image_box">
                <img
                  className="rounded-circle"
                  src={hills}
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
              </div>
              <p className="reviewer_name">Pranay</p>
              <h2>FOUNDER</h2>
              <p>
                An analyst during the week and trek leader by the weekend.
                Trekking and conquering the sahyadri peaks since the past 4
                years. Famously known as the Czar of Kalsubai Shikhar. He's one
                of the most efficacious, good humored & natured trek leader.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="">
              <div className="review_headline">
                <h1>THE TEAM</h1>
              </div>
              <div className="image_box">
                <img
                  className="rounded-circle"
                  src={cloud_mountains}
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
              </div>
              <p className="reviewer_name">Pranay</p>
              <h2>FOUNDER</h2>
              <p>
                An analyst during the week and trek leader by the weekend.
                Trekking and conquering the sahyadri peaks since the past 4
                years. Famously known as the Czar of Kalsubai Shikhar. He's one
                of the most efficacious, good humored & natured trek leader.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default AboutUs;
