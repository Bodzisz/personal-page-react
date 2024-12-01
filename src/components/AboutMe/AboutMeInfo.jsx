import React from "react";
import classes from "./AboutMe.module.css";
import { FaJava } from "react-icons/fa";
import { Anchor, Center, Container, Title, Text, Image, Group, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function AboutMeInfo() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const getInfoHeader = () => {
    return isMobile ? (
      <>
        <Center>
          <FaJava size="100" color={"var(--mantine-color-white)"} />
          <Title order={1} id="about-me-name" c={"var(--mantine-color-white)"} pt={20}>
            Kacper <br /> Wójcicki
          </Title>
        </Center>
        <Center style={{ borderBottom: "2px solid var(--mantine-color-white)" }}>
          <Image src="/images/me.png" alt="Photo of me" h={200} w={200} />
        </Center>
      </>
    ) : (
      <Center>
        <Group style={{ borderBottom: "2px solid var(--mantine-color-white)" }}>
          <Image src="/images/me.png" alt="Photo of me" h={200} w={200} />
          <Title order={1} id="about-me-name" pt={50} c={"var(--mantine-color-white)"}>
            Kacper <br /> Wójcicki
          </Title>
          <Container pt={50} pl={50}>
            <FaJava size="100" color={"var(--mantine-color-white)"} />
          </Container>
        </Group>
      </Center>
    );
  };

  return (
    <Container fluid>
      {getInfoHeader()}
      <Center pt={20}>
        <Title order={2} className={classes.headerFont} style={{ textAlign: "center" }} id="about-me-java-dev">
          Java Software Engineer
        </Title>
      </Center>
      <Container pt={10} c={"var(--mantine-color-white)"} style={{ textAlign: "center" }}>
        <Title order={3} pb={30}>
          Java | Spring | React | Clean Code | Productivity
        </Title>
        <Text pb={30}>
          I am a Java Fullstack Software Engineer and Blogger from Poland 🇵🇱 with a passion for software engineering. I
          have done Bachelor of Science in <b>Applied Computer Science</b> on Wrocław University of Science and
          Technology. <Anchor href="https://pwr.edu.pl/en/">(WUST)</Anchor>
        </Text>
        <Text pb={30}>
          Big fan of <b>Java</b> and <b>Spring</b> framework. I have experience in creating RESTful APIs and
          microservices. I am also familiar with <b>React</b> and <b>JavaScript / TypeScript</b> and I am constantly
          improving my skills in these technologies.
        </Text>
        <Text pb={30}>
          My code is run on Docker and deployed quickly. I focus on writing clean code, as we write it for other
          programmers not for the computer.
        </Text>
        <Title order={5}>
          Let's talk about software engineering, productivity, and how to become a better. <br />
          <a href="/contact"> Click here to see how you can reach me. </a>
        </Title>
      </Container>
    </Container>
  );
}

export default AboutMeInfo;
