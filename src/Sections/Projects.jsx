// src/components/Projects.jsx

import { Box, Container } from "@chakra-ui/react";
import projects from "../../src/data/ProjectsData";
import ProjectGrid from "../Components/ProjectGrid";

const Projects = () => {
  return (
    <Box as="section" id="proyectos" py={10} px={4}>
      <Container maxW="7xl">
        <ProjectGrid projects={projects} />
      </Container>
    </Box>
  );
};

export default Projects;
