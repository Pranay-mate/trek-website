import React from "react";
import { BrowserRouter } from "react-browser-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import Header from "./header";
import Navbar from "./navbar";
import Slide from "./slide";
import LatestTrek from "./latest_trek";
import Motivation from "./motivation";
import Video from "./video";
import TestimonialsMultiPage from "./reviews";
import ContactDetails from "./Contact_details";
import Footer from "./footer";
import Sticky from "./sticky";
import AboutUs from "./about_us";
import TotalTrek from "./total_treks";
import Advice from "./advice"
import TrekDetails from "./trek_details";

export default function App() {
  return (
    <BrowserRouter>
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
        <AboutUs />
        <TotalTrek />
        <Advice />
        <TrekDetails />
      </div>
    </BrowserRouter>
  );
}
