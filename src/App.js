import React from "react";
import "./styles.css";
import Header from "./header";
import Navbar from "./navbar";
import Slide from "./slide";
import LatestTrek from "./latest_trek";
import Motivation from "./motivation";
import Video from "./video";
import TestimonialsMultiPage from "./reviews"
import ContactDetails from "./Contact_details";
import Footer from "./footer";
import Sticky from "./sticky";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slide />
      <LatestTrek />
      <Motivation />
      <Video />
      <TestimonialsMultiPage />
      <ContactDetails />
      <Footer />
      <Sticky />
    </div>
  );
}
