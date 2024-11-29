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
    <Container pb={30} id="about-me" fluid pl={0} pr={0} mr={0} ml={0} mih={"100vh"}>
      <Container pt={50} pr={30} pl={30} fluid style={{ backgroundColor: "#3e277b" }}>
        <ScrollAnimation animateIn="fadeIn">
          <AboutMeInfo />
        </ScrollAnimation>
      </Container>
      <BackgroundImage src="/images/waves/aboutMeWaveUp.svg">
        <Container pt={"calc(0.3 * 100vh)"} fluid>
          <ScrollAnimation animateIn="fadeIn">
            <Container size={"xl"}>
              <TechnologiesIcons />
            </Container>
          </ScrollAnimation>
        </Container>
      </BackgroundImage>
      <Center>
        <Link activeClass="active" to="nav" spy={true} smooth={true} offset={-70} duration={1000}>
          <MdOutlineKeyboardArrowUp className={classes.upArrow} size="100" id="up-arrow" />
        </Link>
      </Center>
    </Container>
  );
}

export default AboutMe;
