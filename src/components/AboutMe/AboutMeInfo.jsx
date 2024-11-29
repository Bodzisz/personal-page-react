import React from "react";
import classes from "./AboutMe.module.css";
import { FaJava } from "react-icons/fa";
import { Anchor, Center, Container, Title, Text } from "@mantine/core";

function AboutMeInfo() {
  return (
    <Container pb={30} fluid>
      <Center>
        <div>
          <FaJava size="100" color={"var(--mantine-color-white)"} />
        </div>
        <Title order={1} id="about-me-name" pt={30} c={"var(--mantine-color-white)"}>
          Kacper <br /> Wójcicki
        </Title>
      </Center>
      <Center>
        <Title order={2} className={classes.headerFont} id="about-me-java-dev">
          Java Developer
        </Title>
      </Center>
      <Container pt={10}>
        <Text c={"var(--mantine-color-white)"}>
          I am a Java Fullstack Developer with a passion for software engineering. I have done Bachelor of Science in{" "}
          <b>Applied Computer Science</b> on Wrocław University of Science and Technology.{" "}
          <Anchor href="https://pwr.edu.pl/en/">(WUST)</Anchor>
        </Text>
      </Container>
    </Container>
  );
}

export default AboutMeInfo;
