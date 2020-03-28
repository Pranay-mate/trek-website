import React from "react";
import "./styles.css";
import Header from "./navbar";
import Slide from "./slide";
import LatestTrek from "./latest_trek";
import Motivation from "./motivation";
import Video from "./video";
import ContactDetails from "./Contact_details";
import Footer from "./footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <LatestTrek />
      <Motivation />
      <Video />
      <ContactDetails />
      <Footer />
    </div>
  );
}
