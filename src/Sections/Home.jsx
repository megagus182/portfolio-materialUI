import { Image, Heading, Box, useMediaQuery, Text, Circle } from "@chakra-ui/react";
import perfil from "../images/CompletoSinFondo.png";
import iconoAngular from "../images/angular.png";
import iconoPostgres from "../images/postgres.png";
import iconoJs from "../images/js.PNG";
import iconoNode from "../images/node.png";
import iconoReact from "../images/react.png";
import iconoRedux from "../images/redux.png";
import iconoSql from "../images/sql.png";
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function Inicio() {
  const [esMayorQue769] = useMediaQuery("(min-width: 769px)");
  const MotionBox = motion(Box);

  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <MotionBox
      as="section"
      id="inicio"
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      background="transparent"
      zIndex="1"
    >
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        maxWidth="container.xl"
        paddingX={{ base: '4', md: '8' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        {/* IZQUIERDA */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: 'center', md: 'flex-start' }}
          marginBottom={{ base: '8', md: '0' }}
          marginRight={{ md: '8' }}
          style={{ userSelect: 'none' }} // Evita la selección de texto en este contenedor
        >
          <Heading
            as={esMayorQue769 ? "h2" : "h3"}
            size={esMayorQue769 ? "xl" : "lg"}
            marginBottom="2"
            color="white"
          >
            👋 Hola, mi nombre es
          </Heading>
          <Box style={{ userSelect: 'none' }}> {/* Evita la selección de texto en este contenedor */}
            <Text
              bgGradient="linear(to-l, blue.600, teal.400)"
              bgClip="text"
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight="extrabold"
              lineHeight="shorter"
            >
              Gustavo Castillo
            </Text>
          </Box>
          <Heading
            as="h2"
            size={esMayorQue769 ? "xl" : "lg"}
            marginTop="2"
            fontWeight="medium"
            color="white"
            style={{ userSelect: 'none' }} // Evita la selección de texto en este heading
          >
            Desarrollador Web FullStack
          </Heading>
          <Box
            marginTop="4"
            display="flex"
            gap="4"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            style={{ userSelect: 'none' }} // Evita la selección de texto en los iconos
          >
            <Image height="auto" maxWidth="8%" src={iconoAngular} alt="Angular" draggable="false" /> {/* Opcional: evitar arrastrar */}
            <Image height="auto" maxWidth="8%" src={iconoPostgres} alt="PostgreSQL" draggable="false" />
            <Image height="auto" maxWidth="8%" src={iconoJs} alt="JavaScript" draggable="false" />
            <Image height="auto" maxWidth="8%" src={iconoNode} alt="Node.js" draggable="false" />
            <Image height="auto" maxWidth="8%" src={iconoReact} alt="React" draggable="false" />
            <Image height="auto" maxWidth="8%" src={iconoRedux} alt="Redux" draggable="false" />
            <Image height="auto" maxWidth="8%" src={iconoSql} alt="SQL" draggable="false" />
          </Box>
        </Box>

        {/* DERECHA */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ userSelect: 'none' }} // Evita la selección alrededor de la imagen
        >
          <Circle
            size={{ base: '300px', md: '400px' }}
            border="4px solid"
            borderColor="blue.400"
            boxShadow="md"
            style={{ userSelect: 'none' }} // Evita la selección del borde
          >
            <Image
              src={perfil}
              alt="Imagen de perfil"
              borderRadius="full"
              objectFit="cover"
              width="100%"
              height="100%"
              draggable="false" // Evita que la imagen sea arrastrada
              style={{ userSelect: 'none' }} // Evita la selección de la imagen
            />
          </Circle>
        </Box>
      </Box>
    </MotionBox>
  );
}