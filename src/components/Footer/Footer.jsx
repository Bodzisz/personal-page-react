import React from "react";
import classes from "./Footer.module.css";
import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { Anchor, Group, Container, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function Footer() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <footer className={classes.footer} style={{ position: isMobile ? "unset" : "fixed" }}>
      <Group display={"flex"} justify="center">
        <Container className={isMobile ? classes.socialMobile : classes.social} pt={20}>
          <Anchor href="https://x.com/kacpersoftware" underline="never" className={classes.hover}>
            <BsTwitterX />
          </Anchor>
        </Container>
        <Container className={isMobile ? classes.socialMobile : classes.social} pt={20}>
          <Anchor href="https://github.com/Bodzisz" underline="never" className={classes.hover}>
            <BsGithub />
          </Anchor>
        </Container>
        <Container className={isMobile ? classes.socialMobile : classes.social} pt={20}>
          <Anchor
            href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b"
            underline="never"
            className={classes.hover}
          >
            <BsLinkedin />
          </Anchor>
        </Container>
        <Container className={isMobile ? classes.socialMobile : classes.social} pt={20}>
          <Anchor href="https://medium.com/@kacper_wojcicki" underline="never" className={classes.hover}>
            <BsMedium />
          </Anchor>
        </Container>
        <Container className={isMobile ? classes.socialMobile : classes.social} pt={20}>
          <Anchor href="https://www.instagram.com/kacper_software" underline="never" className={classes.hover}>
            <BsInstagram />
          </Anchor>
        </Container>
      </Group>
    </footer>
  );
}

export default Footer;
