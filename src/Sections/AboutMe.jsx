import { Box, Heading, Text, Image, useColorModeValue, Tooltip, Wrap, WrapItem, Icon } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import experiencia from "../images/experience.png";
import { SiAngular, SiJavascript, SiReact, SiSpring, SiNodedotjs, SiPostgresql, SiGit, SiPostman, SiScrumalliance, SiAdobephotoshop } from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { DiGitBranch, DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";


export default function SobreMi() {
  const bg = useColorModeValue("blue.600", 'blackAlpha.900');
  const headingColor = useColorModeValue("white", "whiteAlpha.900");
  const MotionBox = motion(Box);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const techs = [
    { name: 'Angular', icon: SiAngular },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Spring Boot', icon: SiSpring },
    { name: 'Git', icon: DiGitBranch },
    { name: 'Visual Studio', icon: DiVisualstudio },
    { name: 'Photoshop', icon: SiAdobephotoshop },
    { name: 'C#', icon: TbBrandCSharp },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'SQL Server', icon: DiMsqlServer },
    { name: 'Azure DevOps', icon: VscAzureDevops },
    { name: 'GIT', icon: SiGit },
    { name: 'Postman', icon: SiPostman },
    { name: 'Scrum', icon: SiScrumalliance },
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
      paddingY={{ base: '8', md: '16' }}
      backgroundColor={bg}
    >
      <Box
        maxWidth="container.xl"
        margin="0 auto"
        paddingX={{ base: '4', md: '8' }}
      >
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          marginBottom="8"
          fontWeight="light"
          color={headingColor}
          style={{ userSelect: 'none' }}
        >
          <Heading style={{ userSelect: 'none' }} textAlign="center" mb={10} color={headingColor}>
            Sobre Mí
          </Heading>
        </Heading>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ md: 'center' }}
          gap={{ base: '8', md: '16' }}
        >
          {/* IZQUIERDA - Imagen */}
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
          >
            <Image
              src={experiencia}
              alt="Experiencia profesional"
              maxWidth={{ base: '80%', md: '400px' }}
              borderRadius="md"
              boxShadow="md"
            />
          </Box>

          {/* DERECHA - Texto */}
          <Box
            flex="1"
            textAlign={{ base: 'left', md: 'justify' }}
          >
            <Text fontSize="md" lineHeight="tall" marginBottom="4">
              Soy Ingeniero en Sistemas con experiencia en desarrollo Full Stack. Actualmente trabajo como programador en Coppel, donde participo en proyectos internos con metodologías ágiles.
            </Text>
            <Text fontSize="md" lineHeight="tall" marginBottom="4">
              Mi camino en la tecnología comenzó desde la secundaria y se fortaleció con estudios técnicos y un bootcamp intensivo. También cuento con experiencia previa en sectores como logística, donde desarrollé habilidades clave como liderazgo y comunicación.
            </Text>
            <Text fontSize="md" lineHeight="tall" marginBottom="4">
              Me considero autodidacta, comprometido y orientado al aprendizaje continuo. Mi objetivo: construir soluciones que generen un impacto real.
            </Text>
            <Text fontWeight="bold" marginTop="6" marginBottom="2" textAlign="center">
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
                      _hover={{ color: 'blue.400', transform: 'scale(1.2)' }}
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