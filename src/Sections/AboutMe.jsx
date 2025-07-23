import {
  Box,
  Heading,
  Text,
  Icon,
  Tooltip,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  SiAngular,
  SiJavascript,
  SiReact,
  SiSpring,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiScrumalliance,
  SiAdobephotoshop,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

export default function AboutMe() {
  const MotionBox = motion(Box);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headingColor = useColorModeValue("white", "whiteAlpha.900");

  const techGroups = [
    {
      label: "Frontend",
      icons: [
        { name: "Angular", icon: SiAngular },
        { name: "React", icon: SiReact },
        { name: "JavaScript", icon: SiJavascript },
      ],
    },
    {
      label: "Backend",
      icons: [
        { name: "Spring Boot", icon: SiSpring },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "C#", icon: TbBrandCSharp },
      ],
    },
    {
      label: "Bases de Datos",
      icons: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "SQL Server", icon: DiMsqlServer },
      ],
    },
    {
      label: "Herramientas de Desarrollo",
      icons: [
        { name: "Git", icon: SiGit },
        { name: "Azure DevOps", icon: VscAzureDevops },
        { name: "Postman", icon: SiPostman },
        { name: "Scrum", icon: SiScrumalliance },
      ],
    },
    {
      label: "Otros",
      icons: [
        { name: "Photoshop", icon: SiAdobephotoshop },
        { name: "Visual Studio", icon: DiVisualstudio },
      ],
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <MotionBox
      ref={ref}
      as="section"
      id="sobremi"
      width="100%"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
      }}
      paddingY={{ base: "8", md: "16" }}
      // Fondo transparente
    >
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          textAlign="center"
          mb={6}
          color={headingColor}
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          🛠 Tecnologías que uso
        </Heading>

        <Text
          textAlign="center"
          maxW="3xl"
          mx="auto"
          mb={10}
          fontSize={{ base: "md", md: "lg" }}
          color="whiteAlpha.800"
        >
          Soy desarrollador Full Stack con enfoque en tecnologías modernas y metodologías ágiles. Me apasiona crear soluciones escalables, eficientes y orientadas al usuario.
        </Text>

        <Box mt="8">
          {techGroups.map((group) => (
            <Box key={group.label} mb="6">
              <Text
                fontWeight="semibold"
                fontSize="lg"
                color="white"
                mb="2"
                textAlign="center"
              >
                {group.label}
              </Text>
              <Wrap justify="center" spacing="6">
                {group.icons.map(({ name, icon: IconComp }) => (
                  <Tooltip key={name} label={name} hasArrow placement="bottom">
                    <WrapItem>
                      <Icon
                        as={IconComp}
                        boxSize={10}
                        color="gray.300"
                        _hover={{ color: "teal.300", transform: "scale(1.2)" }}
                        transition="all 0.2s"
                      />
                    </WrapItem>
                  </Tooltip>
                ))}
              </Wrap>
            </Box>
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
}
