import React, { useEffect } from "react";
import {
  Image,
  Heading,
  Box,
  useMediaQuery,
  Text,
  Circle,
  useColorModeValue,
  Flex,
  Button, // Importar Button de Chakra UI
  Stack, // Importar Stack para agrupar los botones
} from "@chakra-ui/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Importar la imagen de perfil
import perfil from "../images/CompletoSinFondo.png";

// Importar iconos de React Icons para mayor flexibilidad y consistencia
import {
  SiAngular,
  SiPostgresql,
  SiSpring,
  SiJavascript,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di"; // Importar DiMsqlServer desde react-icons/di
import { MdEmail, MdDescription } from "react-icons/md"; // Íconos para los botones

// Definición de los iconos de tecnología con sus componentes de React Icons
const techIcons = [
  { icon: SiAngular, name: "Angular" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiReact, name: "React" },
  { icon: SiSpring, name: "Spring Boot" },
  { icon: DiMsqlServer, name: "SQL Server" },
];

// Componente para un icono orbitante
const OrbitingIcon = ({ icon: IconComponent, name, initialAngle, radius, duration, parentSize }) => {
  const iconSize = 40; // Tamaño del icono en píxeles
  const iconColor = useColorModeValue("gray.700", "whiteAlpha.800"); // Color del icono adaptable al tema
  const iconBgColor = useColorModeValue("whiteAlpha.800", "gray.700"); // Fondo del icono adaptable al tema

  // MotionValue para controlar el progreso angular de la órbita (de 0 a 2*PI radianes)
  const angleProgress = useMotionValue(initialAngle * (Math.PI / 180)); // Convertir ángulo inicial a radianes

  // Animación infinita del ángulo
  useEffect(() => {
    const animation = animate(angleProgress, [initialAngle * (Math.PI / 180), initialAngle * (Math.PI / 180) + Math.PI * 2], {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => animation.stop(); // Limpiar la animación al desmontar
  }, [angleProgress, duration, initialAngle]);

  // Transformar el ángulo en coordenadas X e Y para la órbita
  const x = useTransform(angleProgress, (val) => radius * Math.cos(val));
  const y = useTransform(angleProgress, (val) => radius * Math.sin(val));

  // Simular profundidad: escala y opacidad basadas en la posición Y (cuanto más "arriba" o "detrás", más pequeño/transparente)
  const scale = useTransform(y, [-radius, radius], [0.8, 1.0]); // Más pequeño cuando Y es negativo (detrás)
  const opacity = useTransform(y, [-radius, radius], [0.6, 1.0]); // Más transparente cuando Y es negativo (detrás)

  // Z-index: mayor cuando está en la mitad frontal (Y positivo)
  const zIndex = useTransform(y, (yVal) => (yVal < 0 ? 0 : 2)); // 0 para "detrás" de la imagen (z-index de imagen es 1), 2 para "delante"

  return (
    <motion.div
      style={{
        position: "absolute",
        // Posicionar el centro del icono en el centro del círculo padre
        left: `calc(50% + ${x.get()}px - ${iconSize / 2}px)`,
        top: `calc(50% + ${y.get()}px - ${iconSize / 2}px)`,
        x, // Conectar motion values a las propiedades de estilo
        y,
        scale,
        opacity,
        zIndex,
      }}
      // Añadir un pequeño efecto de escala al hacer hover para interactividad
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      title={name} // Tooltip básico al hacer hover para accesibilidad
    >
      <Box
        boxSize={`${iconSize}px`}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full" // Hacer el fondo del icono circular
        bg={iconBgColor} // Fondo del icono adaptable al tema
        p={1} // Pequeño padding para el icono
        boxShadow="md" // Sombra sutil para darle profundidad
      >
        <IconComponent size={`${iconSize * 0.7}px`} color={iconColor} /> {/* Tamaño del icono dentro del Box */}
      </Box>
    </motion.div>
  );
};

export default function Inicio() {
  const [esMayorQue769] = useMediaQuery("(min-width: 769px)");
  const MotionBox = motion(Box);
  const MotionCircle = motion(Circle);

  const headingColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("blue.500", "blue.300");
  const gradientText = useColorModeValue(
    "linear(to-l, blue.700, teal.600)",
    "linear(to-l, blue.400, teal.300)"
  );

  // Efecto para el scroll al hash (se mantiene, es útil)
  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Función para el scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parámetros para la animación del átomo
  const profileImageSize = esMayorQue769 ? 400 : 280; // Tamaño de la MotionCircle
  const orbitRadius = (profileImageSize / 2) + (esMayorQue769 ? 60 : 40); // Radio de la órbita, responsivo y un poco más grande que la imagen
  const baseDuration = 30; // Duración base en segundos para una órbita completa (más lento para ser más sutil)
  const iconGapAngle = 360 / techIcons.length; // Ángulo entre cada icono

  return (
    <MotionBox
      as="section"
      id="inicio"
      width="100%"
      minHeight="100dvh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }} // Animación de entrada más rápida y suave
      background="transparent"
      zIndex="1"
      overflow="hidden" // Esconder cualquier parte del contenido que se salga del contenedor principal
      py={{ base: 12, md: 0 }} // Añadir padding vertical en móvil si el contenido es muy alto
    >
      <Flex // Usar Flex para el contenedor principal de las dos columnas
        direction={{ base: "column", md: "row" }}
        maxWidth="container.xl"
        px={{ base: "4", md: "8" }}
        textAlign={{ base: "center", md: "left" }}
        alignItems="center" // Centrar verticalmente en la fila
        justifyContent="center" // Centrar horizontalmente en la fila
        width="100%" 
      >
        {/* IZQUIERDA: Texto de bienvenida y Botones CTA */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-start" }}
          mb={{ base: "8", md: "0" }}
          mr={{ md: "8" }}
          style={{ userSelect: "none" }}
          p={{ base: 4, md: 0 }} 
        >
          <Text
            bgGradient={gradientText}
            bgClip="text"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} 
            fontWeight="extrabold"
            lineHeight="shorter"
            whiteSpace={{ base: "normal", md: "nowrap" }} 
            textAlign={{ base: "center", md: "left" }}
          >
            Gustavo Castillo
          </Text>

          <Heading
            as="h2"
            size={esMayorQue769 ? "xl" : "lg"}
            mt="2"
            fontWeight="medium"
            color={headingColor}
            whiteSpace={{ base: "normal", md: "nowrap" }} 
            textAlign={{ base: "center", md: "left" }}
            style={{ userSelect: "none" }}
          >
            Desarrollador Web FullStack
          </Heading>

          {/* Botones de CTA */}
          <Stack
            direction={{ base: "column", sm: "row" }} 
            spacing={4}
            mt={8} 
            justifyContent={{ base: "center", md: "flex-start" }} 
            width="100%" 
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                size="lg"
                colorScheme="blue" 
                rightIcon={<MdEmail />}
                onClick={() => scrollToSection("contacto")}
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s ease-in-out"
              >
                Contáctame
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                variant="outline" 
                borderColor={useColorModeValue("blue.500", "blue.300")}
                color={useColorModeValue("blue.500", "blue.300")}
                rightIcon={<MdDescription />}
                as="a" 
                href="https://drive.google.com/file/d/1FQSm14Qn7XWoZlvdIc6LYMldXUaDPgO9/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  bg: useColorModeValue("blue.50", "whiteAlpha.100"),
                }}
                transition="all 0.2s ease-in-out"
              >
                Ver mi CV
              </Button>
            </motion.div>
          </Stack>
        </Box>

        {/* DERECHA: Imagen de perfil con iconos orbitantes */}
        <Flex
          flex="1"
          justifyContent="center"
          alignItems="center"
          style={{ userSelect: "none" }}
          position="relative" // Importante para posicionar los iconos orbitantes
          minH={{ base: `${profileImageSize + 80}px`, md: `${profileImageSize + 120}px` }}
          minW={{ base: `${profileImageSize + 80}px`, md: `${profileImageSize + 120}px` }}
        >
          <MotionCircle
            size={{ base: "280px", md: "400px" }} // Tamaño del círculo de la imagen
            border="4px solid"
            borderColor={borderColor}
            boxShadow="md"
            animate={{
              y: [0, -10, 0], 
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
            position="relative" 
            overflow="visible" 
            zIndex="1" 
          >
            <Image
              src={perfil}
              alt="Imagen de perfil de Gustavo Castillo, desarrollador FullStack" 
              borderRadius="full"
              objectFit="cover"
              width="100%"
              height="100%"
              draggable="false"
              userSelect="none"
            />
          </MotionCircle>

          {/* Contenedor para los iconos orbitantes */}
          {techIcons.map((tech, index) => (
            <OrbitingIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              initialAngle={index * iconGapAngle} 
              radius={orbitRadius}
              duration={baseDuration + (index * 1.5)} 
              parentSize={profileImageSize} 
            />
          ))}
        </Flex>
      </Flex>
    </MotionBox>
  );
}
