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
  Wrap, // Importa Wrap
  WrapItem, // Importa WrapItem
} from "@chakra-ui/react";
import Coppel from "../images/coppel.png";
import Comida from "../images/Food1.PNG";
import Comida2 from "../images/Food2.PNG";
import Comida3 from "../images/Food3.PNG";
import Comida4 from "../images/Food4.PNG";
import Comida5 from "../images/Food5.PNG";
import Comida6 from "../images/Food6.PNG";
import Comida7 from "../images/Food7.PNG";
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
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
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
} from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { DiGitBranch, DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoGoogle } from "react-icons/bi";
import { DiScrum, DiMaterializecss } from "react-icons/di";
import { SiFirebase, SiStripe, SiRedux, SiCss3, SiSequelize } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";


const tecnologiasIcons = {
  'Angular': SiAngular,
  'JavaScript': SiJavascript,
  'Git': DiGitBranch,
  'Visual Studio': DiVisualstudio,
  'React': SiReact,
  'Spring Boot': SiSpring,
  'C#': TbBrandCSharp,
  'SQL Server': DiMsqlServer,
  'PostgreSQL': SiPostgresql,
  'Azure DevOps': VscAzureDevops,
  'Metodologia Scrum': DiScrum,
  'Bootstrap': FaBootstrap, 
  'Google Workspace': BiLogoGoogle,
  'Node.js': SiNodedotjs,
  'GIT': SiGit,
  'Postman': SiPostman,
  'Scrum': SiScrumalliance,
  'Material UI': DiMaterializecss, 
  'Firebase': SiFirebase,
  'Stripe': SiStripe,
  'Redux': SiRedux,
  'CSS Puro': SiCss3,
  'Sequelize': SiSequelize,
};

const proyectos = [
  {
    nombre: "Plataformas Internas - Coppel",
    descripcion: [
      "Actualmente colaboro como desarrollador en Coppel, participando en el mantenimiento y evolución de plataformas internas a gran escala.",
      "Trabajo en equipo aplicando metodologías ágiles y buenas prácticas de desarrollo para asegurar la calidad y eficiencia del código.",
      "Entre mis responsabilidades están la implementación de nuevas funcionalidades, corrección de bugs y mejoras en la experiencia de usuario.",
      "Por temas de confidencialidad no puedo mostrar imágenes de los proyectos, pero ha sido una experiencia clave en mi crecimiento profesional."
    ],
    imagenes: [Coppel],
    tecnologias: ['Angular', 'Node.js', 'Bootstrap', 'Google Workspace', 'C#', 'SQL Server', 'PostgreSQL', 'Spring Boot', 'Azure DevOps', 'Metodologia Scrum'],
  },
  {
    nombre: "GameScript",
    descripcion: [
      "En un desafiante proyecto académico de 3 semanas, demostré mi capacidad para trabajar en equipo bajo la metodología ágil SCRUM, investigando y aplicando nuevas tecnologías para desarrollar funcionalidades clave.",
      "Esto incluyó la administración y seguridad de cuentas de usuario, la implementación de un sistema de carrito de compras y gestión de pedidos.",
      "También se creo una experiencia de usuario robusta para la exploración de productos (listado, filtrado, búsqueda, gestión de favoritos y carrito).",
      "Habilité la interacción post-transacción mediante revisiones y preguntas sobre productos, configuré comunicaciones automáticas vía email, gestioné perfiles de usuario y realicé el despliegue completo de la aplicación.",
    ],
    imagenes: [juego, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10],
    tecnologias: ['React', 'Node.js', 'Material UI', 'Firebase', 'Stripe', 'Redux'],
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
    tecnologias: ['React', 'Node.js', 'Redux', 'PostgreSQL', 'Sequelize', 'CSS Puro', 'Node.js'],
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
  const handlePrev = () => setIndex((prev) => (prev - 1 + proyectos.length) % proyectos.length);

  const proyecto = proyectos[index];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <MotionBox
      ref={ref}
      id="proyectos"
      as="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      paddingY={{ base: '8', md: '16' }}
      backgroundColor={bg}
      color="white"
      style={{ userSelect: 'none' }}
      py={10}
      px={5}
      bg={bg}>
      <Heading mb={6} textAlign="center" color={textColor} style={{ userSelect: 'none' }}>
        Proyectos
      </Heading>
      <Flex justify="center" align="center" mb={4}>
        <IconButton
          icon={<ArrowLeftIcon />}
          onClick={handlePrev}
          aria-label="Proyecto anterior"
          color={iconColor}
          bg={iconBg}
          _hover={{ bg: iconHoverBg }}
          borderRadius="full"
          size="lg"
          mx={2} />
        <IconButton icon={<ArrowRightIcon />}
          onClick={handleNext}
          aria-label="Siguiente proyecto"
          color={iconColor}
          bg={iconBg}
          _hover={{ bg: iconHoverBg }}
          borderRadius="full"
          size="lg"
          mx={2} />
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
      >
        <Heading size="lg" mb={4} color={textColor} style={{ userSelect: 'none' }}>
          {proyecto.nombre}
        </Heading>
        {proyecto.descripcion.map((linea, idx) => (
          <Text key={idx} mb={2} color={textColor} textAlign="justify" style={{ userSelect: 'none' }}>
            {linea}
          </Text>
        ))}

        {/* Sección de Imágenes con Wrap */}
        <Wrap justify="center" mt={4} spacing={4} style={{ userSelect: 'none' }}>
          {proyecto.imagenes.slice(0, 6).map((img, idx) => (
            <WrapItem key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={img} alt={proyecto.nombre} boxSize="200px" objectFit="cover" borderRadius="md" />
              </motion.div>
            </WrapItem>
          ))}
        </Wrap>

        {/* Sección de Tecnologías con Wrap */}
        <Wrap justify="center" mt={6} spacing={2} style={{ userSelect: 'none' }}>
          {proyecto.tecnologias.map((tech) => (
              <Tooltip label={tech} hasArrow placement="bottom">
            <WrapItem key={tech}>
                {tecnologiasIcons[tech] && (
                  <Icon as={tecnologiasIcons[tech]} boxSize={8} color={textColor} />
                )}
                {!tecnologiasIcons[tech] && (
                  <Box as="span" fontSize="sm" color={textColor} borderWidth="1px" borderRadius="md" px={2} py={1}>{tech}</Box>
                )}
            </WrapItem>
              </Tooltip>
          ))}
        </Wrap>
      </MotionBox>
    </MotionBox>
  );
}