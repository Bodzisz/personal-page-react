import Welcome from "../Welcome/Welcome";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./MainPage.module.css";
import AboutMe from "../AboutMe/AboutMe";
import { Link } from "react-scroll";
import { Container, Center } from "@mantine/core";
import NewsletterSubscriptionCard from "./NewsletterSubscriptionCard";
import ScrollAnimation from "react-animate-on-scroll";

function MainPage() {
  return (
    <Container mt={"calc(100vh * 0.2)"} fluid pl={0} pr={0}>
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} animateOnce={true}>
        <Container mih={"100vh"} fluid>
          <Center w={"100%"} m={0} p={0}>
            <Welcome />
          </Center>
          <Center w={"100%"}>
            <Link activeClass="active" to="about-me-name" spy={true} smooth={true} offset={-70} duration={1000}>
              <MdOutlineKeyboardArrowDown id="down-arrow" size="100" className={classes.downArrow} />
            </Link>
          </Center>
          <Center w={"100%"} pt={20}>
            <NewsletterSubscriptionCard />
          </Center>
        </Container>
      </ScrollAnimation>
      <AboutMe />
    </Container>
  );
}

export default MainPage;
