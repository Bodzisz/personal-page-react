import React from "react";
import "./Footer.css";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-content">
        <li className="social">
          <a href="https://twitter.com/k4cper_wojcicki">
            <BsTwitter />
          </a>
        </li>
        <li className="social">
          <a href="https://github.com/Bodzisz">
            <BsGithub />
          </a>
        </li>
        <li className="social">
          <a href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b">
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
