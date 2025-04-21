import { Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import experiencia from "../images/experience.png";

export default function SobreMi() {
  const bg = useColorModeValue("blue.600", 'blackAlpha.900');
  const headingColor = useColorModeValue("white", "whiteAlpha.900");
  const MotionBox = motion(Box);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

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
      style={{ userSelect: 'none' }}
    >
      <Box
        maxWidth="container.xl"
        margin="0 auto"
        paddingX={{ base: '4', md: '8' }}
        style={{ userSelect: 'none' }}
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
          style={{ userSelect: 'none' }}
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
            <Text style={{ userSelect: 'none' }} fontSize="md" lineHeight="tall" marginBottom="4">
              Desde muy joven me sentí atraído por la tecnología, especialmente por los videojuegos y las computadoras. Esta pasión me llevó a estudiar informática desde la secundaria, continuar una carrera técnica en preparatoria y finalmente obtener el título de Ingeniero en Sistemas.
            </Text>
            <Text fontSize="md" lineHeight="tall" marginBottom="4">
              Aunque en un inicio trabajé en sectores como logística y transporte por motivos económicos, estas experiencias me ayudaron a desarrollar habilidades clave como el liderazgo, la comunicación y la resolución de problemas.
            </Text>
            <Text style={{ userSelect: 'none' }} fontSize="md" lineHeight="tall" marginBottom="4">
              Con el tiempo, decidí retomar mi vocación y me formé en desarrollo Full Stack a través de un bootcamp intensivo, lo que me permitió actualizar mis conocimientos y fortalecer mis habilidades técnicas.
            </Text>
            <Text fontSize="md" lineHeight="tall" marginBottom="4">
              Actualmente trabajo como programador en Coppel, participando en proyectos internos que han enriquecido mi experiencia en entornos de alto rendimiento y colaboración ágil.
            </Text>
            <Text style={{ userSelect: 'none' }} fontSize="md" lineHeight="tall">
              Me considero una persona autodidacta, comprometida y con una fuerte orientación al aprendizaje continuo. Mi objetivo es seguir creciendo como desarrollador y aportar soluciones tecnológicas que generen un impacto real.
            </Text>
            <Text style={{ userSelect: 'none' }} fontWeight="bold" marginTop="6" marginBottom="2" textAlign="center">
              💼 Tecnologías y herramientas que manejo:
            </Text>
            <Text style={{ userSelect: 'none' }} fontSize="md" textAlign="center">
              | Angular | JavaScript | React | Springboot | C# | NodeJs | SQL Server | AzureDevOps |
              Scrum | GIT | Postman | Postgres
            </Text>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}