import Welcome from "../Welcome/Welcome";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./MainPage.module.css";
import AboutMe from "../AboutMe/AboutMe";
import { Link } from "react-scroll";
import { Container, Center } from "@mantine/core";

function MainPage() {
  return (
    <Container pt={"calc(100vh * 0.2)"} w={"100vw"}>
      <Center>
        <Welcome />
      </Center>
      <Center>
        <Link activeClass="active" to="about-me-name" spy={true} smooth={true} offset={-70} duration={1000}>
          <MdOutlineKeyboardArrowDown id="down-arrow" size="100" className={classes.downArrow} />
        </Link>
      </Center>
      <AboutMe />
    </Container>
  );
}

export default MainPage;
