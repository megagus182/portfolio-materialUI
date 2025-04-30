import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  IconButton,
  Flex,
  Tooltip,
  Icon,
  Wrap,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
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
} from "react-icons/si";
import {
  SiFirebase,
  SiStripe,
  SiRedux,
  SiCss3,
  SiSequelize,
} from "react-icons/si";
import Coppel from "../images/coppel.png";
import Comida from "../images/Food1.PNG";
import Comida2 from "../images/Food2.PNG";
import Comida3 from "../images/Food3.PNG";
import Comida4 from "../images/Food4.PNG";
import Comida5 from "../images/Food5.PNG";
import Comida6 from "../images/Food6.PNG";
import Comida7 from "../images/Food7.PNG";
import Artgiss from "../images/Artgiss1.PNG";
import Artgiss2 from "../images/Artgiss2.PNG";
import Artgiss3 from "../images/Artgiss3.PNG";
import Artgiss4 from "../images/Artgiss4.PNG";
import Artgiss5 from "../images/Artgiss5.PNG";
import juego from "../images/Game1.PNG";
import juego2 from "../images/Game2.PNG";
import juego3 from "../images/Game3.PNG";
import juego4 from "../images/Game4.PNG";
import juego5 from "../images/Game5.PNG";
import juego6 from "../images/Game6.PNG";
import juego7 from "../images/Game7.PNG";
import juego8 from "../images/Game8.PNG";
import juego9 from "../images/Game9.PNG";
import juego10 from "../images/Game10.PNG";
import juegoFull1 from "../images/Game1_full.PNG";
import juegoFull2 from "../images/Game2_full.PNG";
import juegoFull3 from "../images/Game3_full.PNG";
import juegoFull4 from "../images/Game4_full.PNG";
import juegoFull5 from "../images/Game5_full.PNG";
import juegoFull6 from "../images/Game6_full.PNG";
import juegoFull7 from "../images/Game7_full.PNG";
import juegoFull8 from "../images/Game8_full.PNG";
import juegoFull9 from "../images/Game9_full.PNG";
import comidaFull1 from "../images/Food1_full.PNG";
import comidaFull2 from "../images/Food2_full.PNG";
import comidaFull3 from "../images/Food3_full.PNG";
import comidaFull4 from "../images/Food4_full.PNG";
import comidaFull5 from "../images/Food5_full.PNG";
import comidaFull6 from "../images/Food6_full.PNG";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoGoogle } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { useSwipeable } from "react-swipeable";
import { VscAzureDevops } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { DiScrum, DiMaterializecss } from "react-icons/di";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { DiGitBranch, DiVisualstudio, DiMsqlServer } from "react-icons/di";

const tecnologiasIcons = {
  Angular: SiAngular,
  JavaScript: SiJavascript,
  Git: DiGitBranch,
  React: SiReact,
  Bootstrap: FaBootstrap,
  PostgreSQL: SiPostgresql,
  GIT: SiGit,
  Redux: SiRedux,
  Stripe: SiStripe,
  Firebase: SiFirebase,
  Sequelize: SiSequelize,
  Scrum: SiScrumalliance,
  Postman: SiPostman,
  "Node.js": SiNodedotjs,
  "Google Workspace": BiLogoGoogle,
  "Metodologia Scrum": DiScrum,
  "Azure DevOps": VscAzureDevops,
  "SQL Server": DiMsqlServer,
  "C#": TbBrandCSharp,
  "Spring Boot": SiSpring,
  "Material UI": DiMaterializecss,
  "CSS Puro": SiCss3,
  "Visual Studio": DiVisualstudio,
};

const proyectos = [
  {
    nombre: "Plataformas Internas - Coppel",
    descripcion: [
      "Actualmente colaboro como desarrollador en Coppel, participando en el mantenimiento y evolución de plataformas internas a gran escala.",
      "Trabajo en equipo aplicando metodologías ágiles y buenas prácticas de desarrollo para asegurar la calidad y eficiencia del código.",
      "Entre mis responsabilidades están la implementación de nuevas funcionalidades, corrección de bugs y mejoras en la experiencia de usuario.",
      "Por temas de confidencialidad no puedo mostrar imágenes de los proyectos, pero ha sido una experiencia clave en mi crecimiento profesional.",
    ],
    imagenes: [Coppel],
    tecnologias: [
      "Angular",
      "Node.js",
      "Bootstrap",
      "Google Workspace",
      "C#",
      "SQL Server",
      "PostgreSQL",
      "Spring Boot",
      "Azure DevOps",
      "Metodologia Scrum",
    ],
    imagenesOriginales: [Coppel],
  },
  {
    nombre: "ArtGiss",
    descripcion: [
      "Este portafolio web fue desarrollado utilizando React y la librería de componentes Material-UI, buscando ofrecer una experiencia de usuario fluida y atractiva.",
      "La galería de obras se presenta de forma dinámica y responsiva, con una opción de lightbox para apreciar cada detalle.", 
      "La sección de contacto incluye validaciones de formulario para asegurar una comunicación efectiva, y la navegación intuitiva permite a los visitantes explorar fácilmente las diferentes facetas del trabajo artístico y los perfiles en redes sociales.",
    ],
    imagenes: [Artgiss, Artgiss2, Artgiss3, Artgiss4, Artgiss5],
    tecnologias: [
      "React",
      "Node.js",
      "Material UI",
      "EmailJS",
    ],
    imagenesOriginales: [Artgiss, Artgiss2, Artgiss3, Artgiss4, Artgiss5],
  },
  {
    nombre: "GameScript",
    descripcion: [
      "En un proyecto académico de 3 semanas, demostré mi capacidad para trabajar en equipo bajo la metodología ágil SCRUM, investigando y aplicando nuevas tecnologías para desarrollar funcionalidades clave.",
      "Esto incluyó la administración y seguridad de cuentas de usuario, la implementación de un sistema de carrito de compras y gestión de pedidos.",
      "También se creo una experiencia de usuario robusta para la exploración de productos (listado, filtrado, búsqueda, gestión de favoritos y carrito).",
      "Habilité la interacción post-transacción mediante revisiones y preguntas sobre productos, configuré comunicaciones automáticas vía email, gestioné perfiles de usuario y realicé el despliegue completo de la aplicación.",
    ],
    imagenes: [
      juego,
      juego2,
      juego3,
      juego4,
      juego5,
      juego6,
      juego7,
      juego8,
      juego9,
      juego10,
    ],
    tecnologias: [
      "React",
      "Node.js",
      "Material UI",
      "Firebase",
      "Stripe",
      "Redux",
    ],
    imagenesOriginales: [
      juegoFull1,
      juegoFull2,
      juegoFull3,
      juegoFull4,
      juegoFull5,
      juegoFull6,
      juegoFull7,
      juegoFull8,
      juegoFull9,
    ],
  },
  {
    nombre: "FoodApp",
    descripcion: [
      "Como parte de un desafiante proyecto individual de 3 semanas en un Bootcamp, desarrollé FoodApp, una SPA enfocada en la exploración y gestión de recetas.",
      "Utilicé React para construir una interfaz de usuario dinámica y Redux para asegurar una gestión de estado eficiente. El estilado se realizó con CSS puro, priorizando la personalización y el rendimiento.",
      "La aplicación se conecta a la API 'Spoonacular' a través de un backend en Node.js con Express, permitiendo a los usuarios ordenar, filtrar y paginar a través de una extensa colección de recetas.",
      "Además, ofrece una potente función de búsqueda, visualización detallada de cada plato y la capacidad de crear y guardar nuevas recetas mediante un formulario intuitivo. La persistencia de datos se logró con PostgreSQL y Sequelize.",
    ],
    imagenes: [Comida, Comida2, Comida3, Comida4, Comida5, Comida6, Comida7],
    tecnologias: [
      "React",
      "Node.js",
      "Redux",
      "PostgreSQL",
      "Sequelize",
      "CSS Puro",
      "Node.js",
    ],
    imagenesOriginales: [
      comidaFull1,
      comidaFull2,
      comidaFull3,
      comidaFull4,
      comidaFull5,
      comidaFull6,
    ],
  },
];

export default function Proyectos() {
  const bg = useColorModeValue("white", "blackAlpha.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const iconColor = useColorModeValue("gray.700", "white");
  const iconBg = useColorModeValue("gray.100", "gray.700");
  const iconHoverBg = useColorModeValue("gray.300", "gray.600");

  const [index, setIndex] = useState(0);
  const MotionBox = motion(Box);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleNext = () => setIndex((prev) => (prev + 1) % proyectos.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + proyectos.length) % proyectos.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, 
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true, 
    trackMouse: true,
  });
  const proyecto = proyectos[index];
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextCarouselImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % proyecto.imagenesOriginales.length
    );
  };

  const prevCarouselImage = () => {
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + proyecto.imagenesOriginales.length) %
        proyecto.imagenesOriginales.length
    );
  };

  const openCarousel = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setSelectedImageIndex(0);
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const [mostrarTodo, setMostrarTodo] = useState(false);
  const esMovil = useBreakpointValue({ base: true, md: false });

  const descripcionResumida = proyecto.descripcion.slice(0, 2);

  return (
    <MotionBox
      ref={ref}
      id="proyectos"
      as="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      paddingY={{ base: "8", md: "16" }}
      backgroundColor={bg}
      color="white"
      style={{ userSelect: "none" }}
      py={10}
      px={5}
      bg={bg}
      {...swipeHandlers} 
    >
      <Heading
        mb={6}
        textAlign="center"
        color={textColor}
        style={{ userSelect: "none" }}
      >
        Proyectos
      </Heading>
      <Flex justify="center" align="center" mb={4}>
        {/* Botones de navegación pantallas grandes */}
        {!esMovil && (
          <>
            <IconButton
              icon={<ArrowLeftIcon />}
              onClick={handlePrev}
              aria-label="Proyecto anterior"
              color={iconColor}
              bg={iconBg}
              _hover={{ bg: iconHoverBg }}
              borderRadius="full"
              size="lg"
              mx={2}
            />
            <IconButton
              icon={<ArrowRightIcon />}
              onClick={handleNext}
              aria-label="Siguiente proyecto"
              color={iconColor}
              bg={iconBg}
              _hover={{ bg: iconHoverBg }}
              borderRadius="full"
              size="lg"
              mx={2}
            />
          </>
        )}
      </Flex>
      <MotionBox
        key={proyecto.nombre}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        maxW="800px"
        mx="auto"
        textAlign="center"
        bg={useColorModeValue("gray.50", "gray.700")}
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        position="relative"
      >
        <Heading
          size="lg"
          mb={4}
          color={textColor}
          style={{ userSelect: "none" }}
        >
          {proyecto.nombre}
        </Heading>
        {esMovil && (
          <Box
            position="absolute"
            top="50%"
            left="10px"
            transform="translateY(-50%)"
            color="white"
            fontSize="2xl"
            _hover={{ cursor: "pointer" }}
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <Icon
                as={ArrowLeftIcon}
                boxSize={6}
                color="teal.400"
                onClick={handlePrev}
              />
            </motion.div>
          </Box>
        )}

        {/* Icono de flecha derecha */}
        {esMovil && (
          <Box
            position="absolute"
            top="50%"
            right="10px"
            transform="translateY(-50%)"
            color="white"
            fontSize="2xl"
            _hover={{ cursor: "pointer" }}
          >
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <Icon
                as={ArrowRightIcon}
                boxSize={6}
                color="teal.400"
                onClick={handleNext}
              />
            </motion.div>
          </Box>
        )}
        {/* Descripción con la opción de ver más en móvil */}
        {(esMovil && !mostrarTodo
          ? descripcionResumida
          : proyecto.descripcion
        ).map((linea, idx) => (
          <Text key={idx} mb={2} color={textColor} textAlign="justify">
            {linea}
          </Text>
        ))}
        {esMovil && (
          <Text
            as="button"
            onClick={() => setMostrarTodo(!mostrarTodo)}
            color="teal.400"
            mt={2}
            _hover={{ textDecoration: "underline" }}
          >
            {mostrarTodo ? "Ver menos" : "Ver más"}
          </Text>
        )}

        {/* Sección de Imágenes con Wrap */}
        <Wrap
          justify="center" 
          mt={4}
          spacing={4}
          style={{ userSelect: "none" }}
          shouldWrapChildren
        >
          {proyecto.imagenes.slice(0, 6).map((img, idx) => (
            <Box key={img} cursor="pointer" onClick={() => openCarousel(idx)}>
              <motion.div>
                <Image
                  src={img}
                  alt={proyecto.nombre}
                  boxSize={{ base: "130px", sm: "180px", md: "200px" }}
                  objectFit="cover"
                  borderRadius="md"
                />
              </motion.div>
            </Box>
          ))}
        </Wrap>

        {/* Sección de Tecnologías con Wrap */}
        <Wrap
          justify="center"
          mt={6}
          spacing={2}
          style={{ userSelect: "none" }}
        >
          {proyecto.tecnologias.map((tech) => (
            <Tooltip key={tech} label={tech} hasArrow placement="bottom">
              <Box as="div">
                {tecnologiasIcons[tech] && (
                  <Icon
                    as={tecnologiasIcons[tech]}
                    boxSize={8}
                    color={textColor}
                  />
                )}
                {!tecnologiasIcons[tech] && (
                  <Box
                    as="span"
                    fontSize="sm"
                    color={textColor}
                    borderWidth="1px"
                    borderRadius="md"
                    px={2}
                    py={1}
                  >
                    {tech}
                  </Box>
                )}
              </Box>
            </Tooltip>
          ))}
        </Wrap>
      </MotionBox>
      <Modal
        isOpen={isCarouselOpen}
        onClose={closeCarousel}
        size={{ base: "90%", md: "80vw", lg: "70vw" }}
      >
        <ModalOverlay />
        <ModalContent padding={0}>
          <ModalCloseButton />
          {useBreakpointValue({
            base: null,
            md: (
              <IconButton
                icon={<ArrowLeftIcon color="green.500" />} 
                onClick={prevCarouselImage}
                aria-label="Imagen anterior"
                position="absolute"
                left={4} 
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                bg="transparent" 
                _hover={{ bg: "gray.200" }} 
                size="lg" 
              />
            ),
          })}
          <ModalBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            {...useSwipeable({
              onSwipedLeft: nextCarouselImage,
              onSwipedRight: prevCarouselImage,
              preventDefaultTouchmoveEvent: true,
              trackMouse: true,
            })}
            style={{ cursor: "grab" }}
          >
            {proyecto.imagenesOriginales &&
              proyecto.imagenesOriginales[selectedImageIndex] && (
                <Image
                  src={proyecto.imagenesOriginales[selectedImageIndex]}
                  alt={`Imagen completa del proyecto ${selectedImageIndex + 1}`}
                  maxW="90vw"
                  maxH="90vh"
                  style={{ userSelect: "none" }}
                />
              )}
          </ModalBody>
          {useBreakpointValue({
            base: null,
            md: (
              <IconButton
                icon={<ArrowRightIcon color="green.500" />}
                onClick={nextCarouselImage}
                aria-label="Siguiente imagen"
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                bg="transparent"
                _hover={{ bg: "gray.200" }}
                size="md"
              />
            ),
          })}
        </ModalContent>
      </Modal>
    </MotionBox>
  );
}
