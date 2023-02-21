import React from "react";
import "./Footer.css";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="social">
          <a href="https://twitter.com/k4cper_wojcicki">
            <BsTwitter />
          </a>
        </div>
        <div className="social">
          <a href="https://github.com/Bodzisz">
            <BsGithub />
          </a>
        </div>
        <div className="social">
          <a href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
