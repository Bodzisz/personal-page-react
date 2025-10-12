import React from "react";
import classes from "./AboutMe.module.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import AboutMeInfo from "./AboutMeInfo";
import TechnologiesIcons from "./Technologies";
import { BackgroundImage, Center, Container, Image } from "@mantine/core";
import ScrollAnimation from "react-animate-on-scroll";

function AboutMe() {
  return (
    <Container id="about-me" fluid pl={0} pr={0} mr={0} ml={0}>
      <Container pt={50} pb={12} pr={30} pl={30} fluid style={{ backgroundColor: "var(--background-color)" }}>
        <ScrollAnimation animateIn="fadeIn">
          <AboutMeInfo />
        </ScrollAnimation>
      </Container>
      {/* <BackgroundImage src="/images/waves/aboutMeWaveUp.svg" fluid pr={0} mr={0}> */}
      <Container pt={30} pb={20} mr={0} pr={0} ml={0} pl={0} fluid>
        <TechnologiesIcons />
      </Container>
      {/* </BackgroundImage> */}
      <Center>
        <Link activeClass="active" to="nav" spy={true} smooth={true} offset={-70} duration={1000}>
          <MdOutlineKeyboardArrowUp className={classes.upArrow} size="100" id="up-arrow" />
        </Link>
      </Center>
    </Container>
  );
}

export default AboutMe;
