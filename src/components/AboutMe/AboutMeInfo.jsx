import React from "react";
import classes from "./AboutMe.module.css";
import { FaJava } from "react-icons/fa";
import { Anchor, Center, Container, Title, Text, Image, Group, useMantineTheme, Button, Card, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function AboutMeInfo() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container fluid>
      <Center>
        <Card className="glass" radius="xl" p="xl" bg="transparent" maw={800} w="100%">
          <Stack align="center" gap="md">
            <Image
              src="/images/me.png"
              alt="Photo of me"
              h={180}
              w={180}
              radius="50%"
              style={{ border: "4px solid var(--mantine-color-violet-4)" }}
            />

            <Title order={1} id="about-me-name" variant="gradient" gradient={{ from: 'violet', to: '#c4a81a' }} style={{ fontFamily: "Bungee, sans-serif", textAlign: "center" }}>
              Kacper Wójcicki
            </Title>

            <Title order={2} className={classes.headerFont} style={{ textAlign: "center", fontFamily: "Bungee, sans-serif" }} id="about-me-java-dev" c="violet.3">
              Java Software Engineer
            </Title>

            <Stack gap="xs" align="center">
              <Title order={3} style={{ fontFamily: "Bungee, sans-serif", textAlign: "center" }} c="white">
                Java | Spring | React | Clean Code | Productivity
              </Title>

              <Text c="dimmed" size="lg" ta="center">
                I am a Java Fullstack Software Engineer and Blogger from Poland 🇵🇱 with a passion for software engineering. I
                have done Bachelor of Science in <b>Applied Computer Science</b> on Wrocław University of Science and
                Technology. <Anchor href="https://pwr.edu.pl/en/" c="violet"> (WUST)</Anchor>
              </Text>

              <Text c="dimmed" size="lg" ta="center">
                Big fan of <b>Java</b> and <b>Spring</b> framework. I have experience in creating RESTful APIs and
                microservices. I am also familiar with <b>React</b> and <b>JavaScript / TypeScript</b> and I am constantly
                improving my skills in these technologies.
              </Text>

              <Text c="dimmed" size="lg" ta="center">
                My code is run on Docker and deployed quickly. I focus on writing clean code, as we write it for other
                programmers not for the computer.
              </Text>
            </Stack>

            <Title order={5} style={{ fontFamily: "Inter, sans-serif", textAlign: "center" }} c="white" mt="md">
              Let's talk about software engineering, productivity, and how to become a better.
            </Title>

            <Anchor href="/contact" underline="never">
              <Button variant="outline" color="gray.5" radius="xl" size="md">
                Contact Me
              </Button>
            </Anchor>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}

export default AboutMeInfo;
