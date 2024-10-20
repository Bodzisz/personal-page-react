import React, { useState, useEffect } from "react";
import "./Projects.css";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, SimpleGrid, Center, Container } from "@mantine/core";
import ProjectCard from "../Card/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((projects) => setProjects(projects))
      .then(setLoading(false))
      .catch((e) => {
        console.log(e);
        setHasError(true);
      });
  }, []);

  if (loading) return <div className="center-div" aria-busy="true"></div>;
  if (hasError) return <div className="center-div">Server Error :(</div>;

  return (
    <Container mt={0} mb={100} size={"xl"}>
      <Center>
        <SimpleGrid cols={isMobile ? 1 : 2} verticalSpacing={"xl"} spacing={"xl"}>
          {projects.map((project) => (
            <ProjectCard project={project} isMobile={isMobile} key={project.id} />
          ))}
        </SimpleGrid>
      </Center>
    </Container>
  );
}

export default Projects;
