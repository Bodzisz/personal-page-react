import classes from "./Nav.module.css";
import React from "react";
import { Container, Group, Center, Drawer, Burger, BackgroundImage } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const getNavOptions = () => {
    return (
      <Center pt={50} pb={200} visibleFrom="sm">
        <Group gap={80}>
          <a href="/" className={classes.link}>
            <span>Home</span>
          </a>
          <a href="/projects" className={classes.link}>
            <span>Projects</span>
          </a>
          <a href="/contact" className={classes.link}>
            <span>Contact</span>
          </a>
        </Group>
      </Center>
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
            <Group h="100%" gap={80} pt={"20vh"}>
              <a href="/" className={classes.link}>
                <span>Home</span>
              </a>
              <a href="/projects" className={classes.link}>
                <span>Projects</span>
              </a>
              <a href="/contact" className={classes.link}>
                <span>Contact</span>
              </a>
            </Group>
          </Drawer.Body>
        </BackgroundImage>
      </Drawer>
    );
  };

  return (
    <BackgroundImage src="/images/waves/navWave.svg">
      <Container id="nav">
        {getNavOptions()}
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" pt={50} pb={150} size={40} />
        {getMobileNavOptions()}
      </Container>
    </BackgroundImage>
  );
}

export default Nav;
