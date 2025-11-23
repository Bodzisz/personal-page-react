import Welcome from "../Welcome/Welcome";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./MainPage.module.css";
import AboutMe from "../AboutMe/AboutMe";
import { Link } from "react-scroll";
import { Container, Center, BackgroundImage, Text, Group, Stack } from "@mantine/core";
import NewsletterSubscriptionCard from "./NewsletterSubscriptionCard";
import ScrollAnimation from "react-animate-on-scroll";
import SEO from "../SEO/SEO";

function MainPage() {
  return (
    <Container fluid p={0} mt={100}>
      <SEO
        title="Kacper Wojcicki"
        description="Personal site of Kacper Wojcicki, a Software Engineer sharing insights on development, books, and more."
        canonical="https://kacper.software/"
      />
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} animateOnce={true}>
        <Container size="lg" pb={100}>
          <Stack align="center" gap="xl">
            <Welcome />

            <Text size="xl" c="dimmed" fw={500}>
              Read more about me
            </Text>

            <Link activeClass="active" to="about-me-name" spy={true} smooth={true} offset={-70} duration={1000}>
              <MdOutlineKeyboardArrowDown
                size={60}
                style={{
                  cursor: 'pointer',
                  animation: 'bounce 2s infinite'
                }}
                color="var(--mantine-color-violet-4)"
              />
            </Link>

            <Container size="sm" w="100%">
              <NewsletterSubscriptionCard />
            </Container>
          </Stack>
        </Container>
      </ScrollAnimation>
      <AboutMe />
    </Container>
  );
}

export default MainPage;
