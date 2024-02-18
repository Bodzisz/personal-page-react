import React from "react";
import classes from "./AboutMe.module.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import AboutMeInfo from "./AboutMeInfo";
import TechnologiesIcons from "./Technologies";
import { Container } from "@mantine/core";

function AboutMe() {
  return (
    <Container pt={"100vh"} pb={"calc(0.2 * 100vh)"} id="about-me">
      <Container className="grid grid-div">
        <AboutMeInfo />
        <TechnologiesIcons />
      </Container>
      <div>
        <Link activeClass="active" to="nav" spy={true} smooth={true} offset={-70} duration={1000}>
          <MdOutlineKeyboardArrowUp className={classes.upArrow} size="100" id="up-arrow" />
        </Link>
      </div>
    </Container>
  );
}

export default AboutMe;
