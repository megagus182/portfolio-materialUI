// src/Components/ProjectGrid.jsx

import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import projects from "../data/ProjectsData";
import AnimatedProjectCard from "./AnimatedProjectCard";

export default function ProjectGrid() {
  return (
    <Box as="section" id="proyectos" py={10} px={4}>
      <Heading textAlign="center" mb={8}>
        Proyectos
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((p, i) => (
          <AnimatedProjectCard key={i} project={p} index={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
