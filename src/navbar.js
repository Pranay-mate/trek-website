import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbar.css";

function Navbar() {
  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <a className="navbar-brand" href="#home">
          TREK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>

            <a className="nav-item nav-link" href="#">
              total_Treks
            </a>
            <a className="nav-item nav-link" href="upcoming_treks">
              upcoming treks
            </a>
            <a className="nav-item nav-link" href="#contact_us">
              Video
            </a>
            <a className="nav-item nav-link" href="#">
              registration
            </a>
            <a className="nav-item nav-link" href="#">
              login
            </a>
            <a className="nav-item nav-link" href="#">
              advice
            </a>
            <a className="nav-item nav-link" href="#reviews">
              Reviews
            </a>
            <a className="nav-item nav-link" href="#contact_us">
              contact-US
            </a>
            <a className="nav-item nav-link" href="#">
              about_us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
