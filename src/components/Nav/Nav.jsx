import classes from "./Nav.module.css";
import React from "react";
import { Container, Group, Center, Drawer, Burger, BackgroundImage, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LightModeSwitchButton } from "./LightModeSwitchButton";
import { BsHouse, BsMedium, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrContact, GrProjects } from "react-icons/gr";

function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const getNavElements = () => {
    return (
      <>
        <a href="/" className={classes.link}>
          <Group>
            <BsHouse />
            <span>Home</span>
          </Group>
        </a>
        <a href="/projects" className={classes.link}>
          <Group>
            <GrProjects />
            <span>Projects</span>
          </Group>
        </a>
        <a href="https://medium.com/@kacper_wojcicki" className={classes.link}>
          <Group>
            <BsMedium />
            <span>Blog</span>
          </Group>
        </a>
        <a href="/contact" className={classes.link}>
          <Group>
            <GrContact />
            <span>Contact</span>
          </Group>
        </a>
      </>
    );
  };

  const getNavOptions = () => {
    return (
      <Container fluid visibleFrom="sm" pt={50} pb={200}>
        <Center>
          <Group gap={80}>{getNavElements()}</Group>
        </Center>
        <Container pos={"absolute"} right={40} top={40}>
          <LightModeSwitchButton />
        </Container>
      </Container>
    );
  };

  const getMobileNavOptions = () => {
    return (
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size="70%"
        padding="0"
        h={drawerOpened ? "100vh" : 0}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <BackgroundImage src="/images/waves/mobileNavWave.svg" h={"calc(100vh - 60px)"}>
          <Drawer.Body pl={0} ml={0}>
            <Center>
              <LightModeSwitchButton />
            </Center>
            <Group h="100%" gap={40} pt={"10vh"}>
              {getNavElements()}
            </Group>
          </Drawer.Body>
          <Group pos="absolute" bottom={5} w={"100%"} h={60}>
            <Center w={"100%"}>
              <Anchor href="https://github.com/Bodzisz" underline="never" pr={20}>
                <BsGithub />
              </Anchor>
              <Anchor href="https://pl.linkedin.com/in/kacper-wojcicki-05a13521b" underline="never" pr={20}>
                <BsLinkedin />
              </Anchor>
              <Anchor href="https://medium.com/@kacper_wojcicki" underline="never" pr={20}>
                <BsMedium />
              </Anchor>
              <Anchor href="https://www.instagram.com/kacper_software" underline="never">
                <BsInstagram />
              </Anchor>
            </Center>
          </Group>
        </BackgroundImage>
      </Drawer>
    );
  };

  return (
    <BackgroundImage src="/images/waves/navWave.svg">
      <Container id="nav">
        {getNavOptions()}
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          color="var(--mantine-color-white)"
          hiddenFrom="sm"
          pt={50}
          pb={150}
          size={40}
        />
        {getMobileNavOptions()}
      </Container>
    </BackgroundImage>
  );
}

export default Nav;
