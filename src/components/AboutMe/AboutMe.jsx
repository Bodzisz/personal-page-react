import React from "react";
import classes from "./AboutMe.module.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import AboutMeInfo from "./AboutMeInfo";
import TechnologiesIcons from "./Technologies";
import { BackgroundImage, Center, Container, Image, Paper } from "@mantine/core";
import ScrollAnimation from "react-animate-on-scroll";

function AboutMe() {
  return (
    <Container id="about-me" fluid p={0}>
      <Container size="lg" py={50}>
        <ScrollAnimation animateIn="fadeIn">
          <Paper className="glass" p="xl" radius="xl">
            <AboutMeInfo />
          </Paper>
        </ScrollAnimation>
      </Container>

      <Container fluid p={0}>
        <TechnologiesIcons />
      </Container>

      <Center pb={50}>
        <Link activeClass="active" to="nav" spy={true} smooth={true} offset={-70} duration={1000}>
          <MdOutlineKeyboardArrowUp
            size={60}
            style={{ cursor: 'pointer' }}
            color="var(--mantine-color-violet-4)"
          />
        </Link>
      </Center>
    </Container>
  );
}

export default AboutMe;
