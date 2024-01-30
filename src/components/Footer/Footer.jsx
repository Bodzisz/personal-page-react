import React from "react";
import classes from "./Footer.module.css";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Anchor } from "@mantine/core";

function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footerContent}>
        <li className={classes.social}>
          <Anchor href="https://twitter.com/k4cper_wojcicki" underline="never" className={classes.hover}>
            <BsTwitter />
          </Anchor>
        </li>
        <li className={classes.social}>
          <Anchor href="https://github.com/Bodzisz" underline="never" className={classes.hover}>
            <BsGithub />
          </Anchor>
        </li>
        <li className={classes.social}>
          <Anchor
            href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b"
            underline="never"
            className={classes.hover}
          >
            <BsLinkedin />
          </Anchor>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
