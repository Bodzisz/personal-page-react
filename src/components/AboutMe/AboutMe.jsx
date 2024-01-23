import React from "react";
import "./AboutMe.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import AboutMeInfo from "./AboutMeInfo";
import TechnologiesIcons from "./Technologies";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="grid grid-div">
        <AboutMeInfo />
        <TechnologiesIcons />
      </div>
      <div>
        <Link
          activeClass="active"
          to="nav"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <MdOutlineKeyboardArrowUp
            className="grow arrow-up"
            size="100"
            id="up-arrow"
          />
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
