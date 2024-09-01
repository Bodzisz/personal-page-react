import React from "react";
import classes from "./Footer.module.css";
import { BsGithub, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { Anchor, Group, Container } from "@mantine/core";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Group display={"flex"} justify="center">
        <Container className={classes.social} pt={20}>
          <Anchor href="https://x.com/kacpersoftware" underline="never" className={classes.hover}>
            <BsTwitterX />
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
        <Container className={classes.social} pt={20}>
          <Anchor href="https://medium.com/@kacper_wojcicki" underline="never" className={classes.hover}>
            <BsMedium />
          </Anchor>
        </Container>
      </Group>
    </footer>
  );
}

export default Footer;
