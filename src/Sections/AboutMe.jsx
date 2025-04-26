import {
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Tooltip,
  Wrap,
  WrapItem,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import experiencia from "../images/experience.png";
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
import { DiGitBranch, DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import React, { useState, useEffect, useRef } from "react"; // Añade React aquí

export default function SobreMi() {
  const bg = useColorModeValue("blue.600", "blackAlpha.900");
  const headingColor = useColorModeValue("white", "whiteAlpha.900");
  const MotionBox = motion(Box);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const esMovil = useBreakpointValue({ base: true, md: false }); // Detecta si es móvil
  const [mostrarTodo, setMostrarTodo] = useState(false); // Estado para controlar la visibilidad completa
  const numeroParrafosResumidos = 1; // Define cuántos párrafos mostrar resumidos
  const MotionImage = motion(Image);

  const textosSobreMi = [
    "Soy Ingeniero en Sistemas con experiencia en desarrollo Full Stack. Actualmente trabajo como programador en Coppel, donde participo en proyectos internos con metodologías ágiles.",
    "Mi camino en la tecnología comenzó desde la secundaria y se fortaleció con estudios técnicos y un bootcamp intensivo. También tengo experiencia previa en sectores como logística, donde desarrollé habilidades clave como liderazgo y comunicación.",
    "Me considero autodidacta, comprometido y orientado al aprendizaje continuo. Mi objetivo: construir soluciones que generen un impacto real.",
  ];

  const techs = [
    { name: "Angular", icon: SiAngular },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Spring Boot", icon: SiSpring },
    { name: "Git", icon: DiGitBranch },
    { name: "Visual Studio", icon: DiVisualstudio },
    { name: "Photoshop", icon: SiAdobephotoshop },
    { name: "C#", icon: TbBrandCSharp },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "SQL Server", icon: DiMsqlServer },
    { name: "Azure DevOps", icon: VscAzureDevops },
    { name: "GIT", icon: SiGit },
    { name: "Postman", icon: SiPostman },
    { name: "Scrum", icon: SiScrumalliance },
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      paddingY={{ base: "8", md: "16" }}
      backgroundColor={bg}
    >
      <Box
        maxWidth="container.xl"
        margin="0 auto"
        paddingX={{ base: "4", md: "8" }}
      >
          <Heading
            style={{ userSelect: "none" }}
            textAlign="center"
            mb={10}
            color={headingColor}
          >
            Sobre Mí
          </Heading>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ md: "center" }}
          gap={{ base: "8", md: "16" }}
        >
          {/* IZQUIERDA - Imagen */}
          <Box flex="1" display="flex" justifyContent="center">
            <MotionImage
              src={experiencia}
              alt="Imagen sobre mí"
              borderRadius="lg"
              maxW={{ base: "200px", md: "300px", lg: "400px" }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </Box>

          {/* DERECHA - Texto */}
          <Box flex="1" textAlign={{ base: "left", md: "justify" }}>
            {textosSobreMi.map((texto, index) => (
              <React.Fragment key={index}>
                {esMovil &&
                !mostrarTodo &&
                index >= numeroParrafosResumidos ? null : (
                  <Text fontSize="md" lineHeight="tall" marginBottom="4">
                    {texto}
                  </Text>
                )}
              </React.Fragment>
            ))}

            {esMovil && textosSobreMi.length > numeroParrafosResumidos && (
              <Text
                as="button"
                onClick={() => setMostrarTodo(!mostrarTodo)}
                color="teal.400"
                mt={2}
                _hover={{ textDecoration: "underline" }}
                textAlign="center"
                width="100%"
                display="block"
              >
                {mostrarTodo ? "Ver menos" : "Ver más"}
              </Text>
            )}

            <Text
              fontWeight="bold"
              marginTop="6"
              marginBottom="2"
              textAlign="center"
            >
              💼 Algunas tecnologías y herramientas que manejo:
            </Text>
            <Wrap justify="center" spacing="6" mt="4">
              {techs.map(({ name, icon: IconComp }) => (
                <Tooltip key={name} label={name} hasArrow placement="bottom">
                  <WrapItem>
                    <Icon
                      as={IconComp}
                      boxSize={10}
                      color="gray.600"
                      _hover={{ color: "blue.400", transform: "scale(1.2)" }}
                      transition="all 0.2s"
                    />
                  </WrapItem>
                </Tooltip>
              ))}
            </Wrap>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}
