import React from "react";
import classes from "./ProjectCard.module.css";
import {
  Anchor,
  Card,
  Center,
  Image,
  Title,
  Button,
  Group,
  Divider,
  Badge,
  BackgroundImage,
  Container,
  Text,
  Spoiler,
  Highlight,
  ScrollArea,
} from "@mantine/core";

const techBadgeColors = {
  java: "red",
  react: "blue",
  spring: "green",
  springboot: "green",
  html: "orange",
  css: "pink",
};

function ProjectCard({ project, isMobile }) {
  const cardDimensions = {
    width: isMobile ? 300 : 400,
    height: isMobile ? 430 : 600,
  };

  return (
    <Card radius={20} m={0} p={0}>
      <BackgroundImage
        src={`../../images/${project.image}`}
        h={cardDimensions.height}
        w={cardDimensions.width}
        className={classes.cardBackground}
      >
        <Card.Section pos={"absolute"} bottom={0} bg={"rgba(0, 0, 0, 0.6)"} w={"100%"} pb={20} pt={10}>
          <Center pb={isMobile ? 10 : 30} pt={10}>
            <Title order={3}>{project.title}</Title>
          </Center>

          <Container pb={10}>
            <Spoiler maxHeight={70} showLabel="Read more" hideLabel="Hide" pb={30}>
              <ScrollArea w={cardDimensions.width - 40} h={120} scrollbars="y" pb={10}>
                <Center pt={10} pb={10}>
                  <Group>
                    {project.technologies.map((tech) => (
                      <Badge
                        variant="outline"
                        // color={
                        //   techBadgeColors[tech.toLowerCase().replace(/\s/g, "")]
                        //     ? techBadgeColors[tech.toLowerCase().replace(/\s/g, "")]
                        //     : "var(--primary-hover)"
                        // }
                        color="var(--primary-hover)"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                </Center>
              </ScrollArea>

              <ScrollArea w={cardDimensions.width - 40} h={isMobile ? 120 : 270} scrollbars="y">
                {project.desc}
              </ScrollArea>

              <Center pt={10}>
                <Anchor href={project.repo_url} underline="never">
                  <Button>Go to Repository</Button>
                </Anchor>
              </Center>
            </Spoiler>
          </Container>
        </Card.Section>
      </BackgroundImage>
    </Card>
  );

  const oldCard = () => {
    return (
      <div
        className="card"
        style={{
          backgroundImage: `url(/images/${project.image})`,
        }}
      >
        <div className="card-content">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-body">{project.desc}</p>
          <Anchor href={project.repo_url} role="button">
            Read More
          </Anchor>
        </div>
      </div>
    );
  };
}

export default ProjectCard;
