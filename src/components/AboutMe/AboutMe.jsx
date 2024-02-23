import React from "react";
import classes from "./AboutMe.module.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import AboutMeInfo from "./AboutMeInfo";
import TechnologiesIcons from "./Technologies";
import { Center, Container } from "@mantine/core";

function AboutMe() {
  return (
    <Container
      mt={"100vh"}
      pt={"20vh"}
      pb={"calc(0.2 * 100vh)"}
      id="about-me"
      fluid
      pl={0}
      pr={0}
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    >
      <Container pt={50} fluid>
        <Container p={30} fluid>
          <AboutMeInfo />
          <Container size={"xl"}>
            <TechnologiesIcons />
          </Container>
        </Container>
        <Center>
          <Link activeClass="active" to="nav" spy={true} smooth={true} offset={-70} duration={1000}>
            <MdOutlineKeyboardArrowUp className={classes.upArrow} size="100" id="up-arrow" />
          </Link>
        </Center>
      </Container>
    </Container>
  );
}

export default AboutMe;
