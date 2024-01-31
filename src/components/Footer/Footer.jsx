import React from "react";
import classes from "./Footer.module.css";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Anchor, Group, Container } from "@mantine/core";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Group display={"flex"} justify="center">
        <Container className={classes.social} pt={20}>
          <Anchor href="https://twitter.com/k4cper_wojcicki" underline="never" className={classes.hover}>
            <BsTwitter />
          </Anchor>
        </Container>
        <Container className={classes.social} pt={20}>
          <Anchor href="https://github.com/Bodzisz" underline="never" className={classes.hover}>
            <BsGithub />
          </Anchor>
        </Container>
        <Container className={classes.social} pt={20}>
          <Anchor
            href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b"
            underline="never"
            className={classes.hover}
          >
            <BsLinkedin />
          </Anchor>
        </Container>
      </Group>
    </footer>
  );
}

export default Footer;
