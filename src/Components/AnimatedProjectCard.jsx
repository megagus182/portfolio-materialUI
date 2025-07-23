// src/Components/AnimatedProjectCard.jsx

import { Box } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const MotionBox = motion(Box);

const directions = [
  { x: -100, y: 0 },
  { x: 0, y: -100 },
  { x: 100, y: 0 },
  { x: -100, y: 100 },
  { x: 100, y: 100 },
];

const AnimatedProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  const dir = directions[index % directions.length];

  const variants = {
    hidden: { opacity: 0, x: dir.x, y: dir.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <ProjectCard {...project} />
    </MotionBox>
  );
};

export default AnimatedProjectCard;
