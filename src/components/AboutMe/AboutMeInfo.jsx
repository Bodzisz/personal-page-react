import React from "react";
import classes from "./AboutMe.module.css";
import { FaJava } from "react-icons/fa";
import { Anchor, Center, Container, Title } from "@mantine/core";

function AboutMeInfo() {
  return (
    <Container pb={30} fluid>
      <Center>
        <div>
          <FaJava size="100" />
        </div>
        <Title order={1} id="about-me-name" pt={30}>
          Kacper <br /> Wójcicki
        </Title>
      </Center>
      <Center>
        <Title order={2} className={classes.headerFont} id="about-me-java-dev">
          Java Developer
        </Title>
      </Center>
      <Container pt={10}>
        <p>
          I am a Java Fullstack Developer with a passion for software engineering and a Bachelor of Science in{" "}
          <b>Applied Computer Science</b> on Wrocław University of Science and Technology.{" "}
          <Anchor href="https://pwr.edu.pl/en/">(WUST)</Anchor>
        </p>
      </Container>
    </Container>
  );
}

export default AboutMeInfo;
