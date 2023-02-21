import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="social">
          <a href="https://twitter.com/k4cper_wojcicki">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://github.com/Bodzisz">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
