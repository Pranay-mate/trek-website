import React from "react";
import "./css/contact_details.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEnvelope,
  faMobile,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
function ContactDetails() {
  return (
    <section id="contact_us" className="contact">
      <div className="container footer-inner">
        <div className="row">
          <div className="col-lg-4 footer-widget" role="complementary">
            <div id="logo" className="widget widget_text">
              <div className="logo textwidget">
                <a href="https://www.indiahikes.com/">
                  <img
                    loading="lazy"
                    src="https://indiahikes.com/wp-content/uploads/2019/12/IH-Logo-1_1.png"
                    alt="logo"
                    width="230"
                    height="49"
                    className="alignleft size-full wp-image-45 lazyloaded"
                    data-lazy-src="https://indiahikes.com/wp-content/uploads/2019/12/IH-Logo-1_1.png"
                    data-was-processed="true"
                  />
                  <noscript>
                    <img
                      src="https://indiahikes.com/wp-content/uploads/2019/12/IH-Logo-1_1.png"
                      alt="logo"
                      width="230"
                      height="49"
                      className="alignleft size-full wp-image-45"
                    />
                  </noscript>
                </a>
                <div className="clear" />
                <p id="copyright" className="para">
                  © 2020 Pranay.com
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 footer-widget" role="complementary">
            <div id="social_sticker" className="widget widget_text">
              <h3 className="widgettitle sticker heading">Follow Us</h3>{" "}
              <p className="para">Let us be social</p>
              <div className="row textwidget">
                <div className="col-lg-3">
                  <p>
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </p>
                </div>
                <div className="col-lg-3">
                  <p>
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </p>
                </div>
                <div className="col-lg-3">
                  <p>
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </p>
                </div>
                <div className="col-lg-3">
                  <p>
                    <FontAwesomeIcon icon={faLinkedin} color="white" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 footer-widget" role="complementary">
            <div id="contact_me" className="widget widget_text">
              <h3 className="widgettitle heading">Contact Us</h3>{" "}
              <div className="textwidget">
                <div className="contact-us">
                  <p className="para">
                    <FontAwesomeIcon icon={faEnvelope} color="white" />{" "}
                    matepranay11@gmail
                  </p>
                </div>
                <div className="contact-us">
                  <p className="para">
                    <FontAwesomeIcon icon={faMobile} color="white" />{" "}
                    080-468-01269
                  </p>
                </div>
                <div className="contact-us">
                  <p className="para">
                    <FontAwesomeIcon icon={faMobile} color="white" />{" "}
                    080-468-01269
                  </p>
                </div>
                <div className="contact-us">
                  <p className="para">
                    <FontAwesomeIcon icon={faClock} color="white" /> 11:00 AM –
                    7:30 PM
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
