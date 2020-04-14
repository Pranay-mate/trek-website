import React from "react";
import { FaRegClock, FaRegCalendarAlt, FaCheckCircle, FaStar } from "react-icons/fa";
import { MdDoNotDisturbOn } from "react-icons/md";
import cloud_mountains from "./data/clouds+mountains.jpg";
import "./css/trek_details.css";

function TrekDetails() {
  return (
    <div className="TrekDetails">
      <img
        src={cloud_mountains}
        className="slide_img col-lg-12"
        alt="Responsive img"
      />
      <h1>Kalsubai Peak Night Trek</h1>
      <div class="trip-line-items">
        <span class="line-item trip-duration">
          <FaRegClock /> 1 Night 1 Day
        </span>
        <br />
        <span class="line-item trip-availability">
          <FaRegCalendarAlt /> 02 May, 03 May.
        </span>
      </div>
      <h5>Height: 1,084 m (3,556 ft)</h5>
      <h5>Date: 22 feb 2020</h5>
      <h5>Difficulty: Easy</h5>
      <h2>Overview/Itinerary</h2>
      <ul>
        <li>
          <strong>Altitude:</strong> 5,400 ft
        </li>
        <li>
          <strong>Time taken:</strong> 4 hours to ascend, 3 hours to descend
        </li>
        <li>
          <strong>Water sources:</strong> None. Carry at lease 2 litres of
          water.
        </li>
        <li>
          <strong>Terrain type:</strong> Grasslands, rocks.
        </li>
        <li>
          <strong>Trek gradient:</strong> Moderate
        </li>
      </ul>
      <p>
        <strong>Please Note</strong>
      </p>
      <ul>
        <li>
          People may board the same train from their respective stations of
          convenience.
        </li>
        <li>Missing the train is missing Trek, no refund will be provided.</li>
      </ul>
      <div class="section-title">
        <div class="heading uppercase ">Inclusions/Exclusions</div>
        <div class="title h2">What we'll give/What we won't</div>
      </div>
      <div class="content">
        {/*Inclusions*/}
        <div class="inclusions">
          <h3 class="title">What is included in the tour</h3>
          <ul>
            <li><FaCheckCircle className="fa-lg" />  1 veg Breakfast and 1 veg Lunch</li>
            <li><FaCheckCircle className="fa-lg" />  Kasara to Kasara travel by local jeep</li>
            <li><FaCheckCircle className="fa-lg" />  Trek Leader expertise charges</li>
          </ul>
        </div>
        {/* Exclusions */}
        <div class="exclusions">
          <h3 class="title">What is NOT included in the tour</h3>
          <ul>
            <li><MdDoNotDisturbOn className="fa-lg" />  Travel till Kasara and back</li>
            <li><MdDoNotDisturbOn className="fa-lg" />  Mineral water/lime water/ purchased for personal consumption</li>
            <li><MdDoNotDisturbOn className="fa-lg" />  All kinds of Extra Meals / soft drinks ordered</li>
            <li><MdDoNotDisturbOn className="fa-lg" />  Any kind of personal expenses</li>
            <li><MdDoNotDisturbOn className="fa-lg" />  Any kind of cost which is not mentioned in the cost includes above</li>
            <li><MdDoNotDisturbOn className="fa-lg" />  All expenses incurred due to unforeseen and unavoidable circumstances like roadblocks, bad weather</li>
            <li><MdDoNotDisturbOn className="fa-lg" />  Any medical / Emergency evacuations if required</li>
          </ul>
        </div>
      </div>
      <div class="title h2">
      Things to Carry
    </div>
    <div class="content">
        <ul>
<li><FaStar className="fa-lg" />  2/3 Liters of water</li>
	<li><FaStar className="fa-lg" />  Some Dry fruits / Dry Snacks / Energy Bars</li>
	<li><FaStar className="fa-lg" />  Glucon D / ORS / Tang / Gatorade sachets</li>
	<li><FaStar className="fa-lg" />  Good Torch must with an extra battery</li>
	<li><FaStar className="fa-lg" />  Trekking Shoes provide more grip and comfort on the trek</li>
	<li><FaStar className="fa-lg" />  One Day Backpack 20 to 30 liters</li>
	<li><FaStar className="fa-lg" />  Sun Cap and Sunscreen</li>
	<li><FaStar className="fa-lg" />  Personal First aid and Personal Medicine</li>
	<li><FaStar className="fa-lg" />  Identity Proof</li>
	<li><FaStar className="fa-lg" />  Please wear Full sleeves and Full Track Pant this will protect from Summer Sun / Thorns / Insects / Prickles</li>
</ul>

<h2>Cancellation Policy</h2>

<ul>
  <li><FaStar className="fa-lg" />  75% refund if notified via phone conversation 8 or more days prior to the event date.</li>
	<li><FaStar className="fa-lg" />  50 % refund if notified via phone conversation 4 to 7 days prior to the event date.</li>
	<li><FaStar className="fa-lg" />  No refund if the cancellation requested is less than 3 days prior to the event date&nbsp;</li>
	<li><FaStar className="fa-lg" />  No show No Refund.</li>
	<li><FaStar className="fa-lg" />  Event Tickets cannot be transferred to another date against cancellation.</li>
	<li><FaStar className="fa-lg" />  Event Tickets cannot be transferred to another person against cancellation.</li>
	<li><FaStar className="fa-lg" />  If Trek gets canceled we will refund "Trek Amount" only.</li>
</ul>
      </div>
    </div>
  );
}
export default TrekDetails;
