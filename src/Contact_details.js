import React from "react";
import "./css/contact_details.css";

function ContactDetails() {
  return (
    <section className="contact">
      <div className="container footer-inner">
        <div className="row">
          <div className="col-lg-4 footer-widget" role="complementary">
            <div id="logo" className="widget widget_text">
              <div className="textwidget">
                <a href="https://www.indiahikes.com/">
                  <img
                    loading="lazy"
                    src="https://indiahikes.com/wp-content/uploads/2019/12/IH-Logo-1_1.png"
                    alt="logo"
                    width="230"
                    height="49"
                    class="alignleft size-full wp-image-45 lazyloaded"
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
                <p id="copyright">© 2020 Pranay.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 footer-widget" role="complementary">
            <div id="social_sticker" className="widget widget_text">
              <h3 className="widgettitle">Follow Us</h3>{" "}
              <div className="row textwidget">
                <div className="col-lg-3">
                  <p>a</p>
                </div>
                <div className="col-lg-3">
                  <p>b</p>
                </div>
                <div className="col-lg-3">
                  <p>c</p>
                </div>
                <div className="col-lg-3">
                  <p>d</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 footer-widget" role="complementary">
            <div id="contact_me" className="widget widget_text">
              <h3 className="widgettitle">Contact Us</h3>{" "}
              <div className="textwidget">
                <div className="contact-us">
                  <p>matepranay11@gmial</p>
                </div>
                <div className="contact-us">
                  <p>080-468-01269</p>
                </div>
                <div className="contact-us">
                  <p>080-468-01269</p>
                </div>
                <div className="contact-us">
                  <p>11:00 AM – 7:30 PM</p>
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
