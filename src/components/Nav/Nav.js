import "./Nav.css";
import React from "react";

function Nav() {
  return (
    <div className="grid nav-container" id="nav">
      <div className="nav-item grow">
        <a href="/" style={{ textDecoration: "none" }}>
          <span>Home</span>
        </a>
      </div>
      <div className="nav-item grow">
        <a href="/projects" style={{ textDecoration: "none" }}>
          <span>Projects</span>
        </a>
      </div>
      <div className="nav-item grow">
        <a href="/contact" style={{ textDecoration: "none" }}>
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}

export default Nav;
