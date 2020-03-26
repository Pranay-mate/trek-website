import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="main_banner">
      <h1>Pranay</h1>
      <p>motivational line</p>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
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
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              home
            </a>
            <a className="nav-item nav-link" href="#">
              total_Treks
            </a>
            <a className="nav-item nav-link" href="#">
              upcoming treks
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
            <a className="nav-item nav-link" href="#">
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

export default Header;
