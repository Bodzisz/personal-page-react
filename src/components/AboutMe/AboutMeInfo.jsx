import React from "react";
import { FaUniversity, FaJava } from "react-icons/fa";
import { Center, Container, Group, Title } from "@mantine/core";

function AboutMeInfo() {
  return (
    <Container pb={30}>
      <Center>
        <div>
          <FaJava size="100" />
        </div>
        <Title order={2} id="about-me-name" pt={30}>
          Kacper <br /> Wójcicki
        </Title>
      </Center>
      <Title order={2} className="primary-hover-color" id="about-me-java-dev">
        Java Developer
      </Title>
      <article className="about-me-article" id="about-me-article">
        <p>
          <b>22</b> years old
        </p>
        <p>
          Bachelor of Science in <b>Applied Computer Science</b> on Wroclaw Unviersity of Technology
        </p>
      </article>
    </Container>
  );
}

export default AboutMeInfo;
