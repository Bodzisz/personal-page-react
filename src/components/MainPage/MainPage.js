import Welcome from "../Welcome/Welcome";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./MainPage.css";
import AboutMe from "../AboutMe/AboutMe";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="container main-page-div">
      <Welcome />
      <Link
        activeClass="active"
        to="about-me-name"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        <MdOutlineKeyboardArrowDown
          className="down-arrow grow"
          id="down-arrow"
          size="100"
        />
      </Link>
      <AboutMe />
    </div>
  );
}

export default MainPage;
