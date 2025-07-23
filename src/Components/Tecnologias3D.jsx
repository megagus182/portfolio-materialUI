import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  SoftShadows,
  Environment,
  ContactShadows,
  useCursor,
} from "@react-three/drei";
import { useSpring, animated as a } from "@react-spring/three";
import { motion } from "framer-motion";
import {
  Box,
  useColorMode,
  useColorModeValue,
  Button,
  Heading,
  Text,
  Flex, // Importar Flex para el contenedor de 50/50
  Spinner, // Para el fallback del Canvas
} from "@chakra-ui/react";

// Importar los íconos de forma más limpia
import {
  SiAngular,
  SiReact,
  SiJavascript,
  SiSpring,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiScrumalliance,
  SiAdobephotoshop,
} from "react-icons/si";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

import * as THREE from "three";

// Tecnologías
const techs = [
  {
    name: "Angular",
    icon: SiAngular,
    description:
      "Framework robusto que utilizo para construir interfaces dinámicas, escalables y bien estructuradas. Me gusta aprovechar su arquitectura basada en componentes y su integración con RxJS.",
  },
  {
    name: "React",
    icon: SiReact,
    description:
      "Biblioteca ligera y poderosa que me permite crear interfaces modernas y reactivas. Ideal para proyectos donde la experiencia de usuario es clave.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    description:
      "El lenguaje base de la web. Lo domino desde hace años y es esencial para cualquier desarrollo frontend y backend moderno.",
  },
  {
    name: "Spring Boot",
    icon: SiSpring,
    description:
      "Framework backend que uso para construir APIs robustas, seguras y listas para producción. Su integración con Java lo hace ideal para soluciones empresariales.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description:
      "Mi elección cuando necesito servidores rápidos y eficientes basados en JavaScript. Lo uso especialmente en proyectos full stack con React o Angular.",
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    description:
      "Lenguaje que empleo principalmente en contextos de escritorio o integraciones con herramientas de Microsoft. Me gusta su sintaxis fuerte y estructura orientada a objetos.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description:
      "Base de datos confiable y poderosa que uso cuando el rendimiento y la integridad son clave. Me gusta aprovechar sus funciones avanzadas como JSONB o CTEs.",
  },
  {
    name: "SQL Server",
    icon: DiMsqlServer,
    description:
      "Base de datos que conozco por experiencia laboral en entornos empresariales, como Coppel. Ideal para aplicaciones con alto volumen de transacciones.",
  },
  {
    name: "Git",
    icon: SiGit,
    description:
      "Herramienta fundamental en mi flujo de trabajo. Siempre trabajo con ramas, commits descriptivos y buenas prácticas de versionado.",
  },
  {
    name: "Azure DevOps",
    icon: VscAzureDevops,
    description:
      "Plataforma que he usado para gestionar proyectos, pipelines y control de versiones en equipos de desarrollo colaborativo.",
  },
  {
    name: "Postman",
    icon: SiPostman,
    description:
      "Mi aliado al desarrollar APIs. Lo uso tanto para probar endpoints como para documentar flujos y validar respuestas.",
  },
  {
    name: "Scrum",
    icon: SiScrumalliance,
    description:
      "Metodología ágil que aplico en equipos para iterar rápido, ajustar prioridades y mantener una visión clara del progreso.",
  },
  {
    name: "Photoshop",
    icon: SiAdobephotoshop,
    description:
      "Aunque no soy diseñador de profesión, lo utilizo para ajustes visuales, optimización de assets o incluso colaborar con diseñadores en mi equipo.",
  },
  {
    name: "Visual Studio",
    icon: DiVisualstudio,
    description:
      "Editor que uso cuando trabajo con C# o proyectos vinculados a Microsoft. Me gusta su entorno integrado y depuración poderosa.",
  },
];

// Colores por tecnología
const techColors = {
  Angular: "#DD0031",
  React: "#61DAFB",
  JavaScript: "#F7DF1E",
  "Spring Boot": "#6DB33F",
  "Node.js": "#339933",
  "C#": "#68217A",
  PostgreSQL: "#336791",
  "SQL Server": "#CC2927",
  Git: "#F05032",
  "Azure DevOps": "#0078D7",
  Postman: "#FF6C37",
  Scrum: "#007A33",
  Photoshop: "#31A8FF",
  "Visual Studio": "#5C2D91",
};

// Función para oscurecer el color para el estado hover
function darkenColor(hex, amount = 0.2) {
  const col = new THREE.Color(hex);
  col.offsetHSL(0, 0, -amount); // reduce lightness
  return col.getStyle();
}

// Componente de Tecla normal
function Key({ icon: IconComponent, position, color, onClick, rotation }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  useCursor(hovered); // Cambia el cursor a pointer al hacer hover

  // Animación de la tecla al presionar
  const { y } = useSpring({
    y: pressed ? 0.1 : 0.5, // Posición Y cuando está presionado vs. normal
    config: { tension: 300, friction: 15 },
  });

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onClick={onClick}
      rotation={rotation}
    >
      {/* Base de la tecla (parte oscura) */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[1.6, 0.2, 1.6]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* Parte superior de la tecla (animada y con color) */}
      <a.mesh position-y={y} rotation={[0, Math.PI / 4, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.9, 0.4, 4]} /> {/* Forma de la tecla */}
        <meshStandardMaterial
          color={hovered ? darkenColor(color) : color} // Oscurece al hacer hover
          roughness={0.3}
          metalness={0.2}
        />
      </a.mesh>
      {/* Contenido HTML para el ícono */}
      <Html
        center
        position={[0, 0.85, 0]}
        style={{
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none", // Permite que los eventos del mouse pasen a la malla 3D
          userSelect: "none",
          color: hovered ? "#ccc" : "white", // Color del ícono al hacer hover
        }}
      >
        {IconComponent && <IconComponent size={56} />}
      </Html>
    </group>
  );
}

// Componente de Barra Espaciadora (con forma personalizada)
function SpaceBar({
  icon: IconComponent,
  position,
  color,
  width,
  onClick,
  rotation,
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const shapeRef = useRef();
  useCursor(hovered); // Cambia el cursor a pointer al hacer hover

  // Define la geometría de la barra espaciadora
  useEffect(() => {
    const top = width * 0.85;
    const bottom = width - 1.5;
    const shape = new THREE.Shape();
    shape.moveTo(-bottom / 2, -0.2);
    shape.lineTo(bottom / 2, -0.2);
    shape.lineTo(top / 2, 0.2);
    shape.lineTo(-top / 2, 0.2);
    shape.lineTo(-bottom / 2, -0.2);

    const extrudeSettings = {
      steps: 1,
      depth: 1.1,
      bevelEnabled: false,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    if (shapeRef.current) {
      shapeRef.current.geometry = geometry;
    }
  }, [width]);

  // Animación con react-spring para la posición y el color
  const springProps = useSpring({
    positionY: pressed ? 0.2 : 0.5,
    color: hovered ? darkenColor(color, 0.1) : color, // Ligeramente más oscuro al hover
    config: { mass: 1, tension: 500, friction: 20 },
  });

  return (
    <group
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        setPressed(false); // Asegura que se despresione al salir
      }}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => {
        setPressed(false);
        onClick();
      }}
      // El cursor se maneja con useCursor de drei
    >
      {/* Base de la tecla (parte oscura) */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[width, 0.2, 1.6]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Parte superior animada de la barra espaciadora */}
      <a.mesh
        ref={shapeRef}
        position-y={springProps.positionY}
        rotation={[-Math.PI, 0, 0]} // Rotación para la forma
        castShadow
      >
        <a.meshStandardMaterial
          attach="material"
          color={springProps.color}
          roughness={0.3}
          metalness={0.2}
        />
      </a.mesh>

      {/* Ícono flotante */}
      <Html
        center
        position={[0, 0.85, 0]}
        style={{
          width: `${56 + width * 5}px`, // Ajusta el ancho del contenedor HTML
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
          color: hovered ? "#ccc" : "white",
        }}
      >
        {IconComponent && <IconComponent size={56} />}
      </Html>
    </group>
  );
}

// Componente principal de Tecnologías 3D
function Tecnologias3D() {
  const [selectedTech, setSelectedTech] = useState(null);
  // Distribución de las tecnologías en filas
  const row1 = techs.slice(0, 1);
  const row2 = techs.slice(1, 6);
  const row3 = techs.slice(6, 11);
  const row4 = techs.slice(11, 14);
  const { colorMode } = useColorMode();



  const textColor = useColorModeValue("#111", "#f0f0f0"); // Texto principal

  // Colores de la tarjeta de descripción
  const cardBg =
    colorMode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 1)";
  const cardBorder =
    colorMode === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)";
  const cardText = colorMode === "dark" ? "#fff" : "#222";

  return (
    <Box
      width="100%"
      px={{ base: 4, md: 12 }}
      py={{ base: 8, md: 16 }}
      //backgroundColor={backgroundColor} // Fondo semitransparente para ver las partículas
      borderRadius="xl"
      //boxShadow="lg"
      mt={8}
      display="flex" // Contenedor principal flex
      flexDirection="column" // Por defecto columna en todos los tamaños
      alignItems="center" // Centra el contenido horizontalmente
      justifyContent="center"
      id="skills"
    >
      {/* Título y subtítulo de la sección */}
      <Box textAlign="center" mb={8}>
        <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" textColor={textColor}>
          🛠 Tecnologías que uso
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.500">
          Soy desarrollador Full Stack con enfoque en tecnologías modernas y metodologías ágiles.
        </Text>
      </Box>

      {/* Contenedor Flex para las dos columnas (teclado 3D y tarjeta) */}
      <Flex
        width="100%" // Ocupa el 100% del ancho del padre
        direction={{ base: "column", md: "row" }} // Columna en móvil, fila en escritorio
        justifyContent="center"
        alignItems="stretch" // Asegura que las columnas tengan la misma altura
        gap={8} // Espacio entre las columnas
      >
        {/* Contenedor del Canvas 3D */}
        <Box
          flex="1" // Ocupa 50% del espacio disponible
          width={{ base: "100%", md: "50%" }} // Explícitamente 100% en móvil, 50% en escritorio
          height={{ base: "50vh", md: "auto" }} // Altura fija en móvil (vh), auto en escritorio para flex
          minHeight="300px" // Altura mínima para asegurar visibilidad
          mb={{ base: 8, md: 0 }} // Margen inferior en móvil, ninguno en escritorio
          position="relative" // Para posicionar el spinner de carga
        >
          {/* Suspense para mostrar un spinner mientras el Canvas carga */}
          <Suspense
            fallback={
              <Flex
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                justifyContent="center"
                alignItems="center"
                bg={colorMode === "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)"}
                borderRadius="md"
              >
                <Spinner size="xl" color={colorMode === "dark" ? "blue.300" : "blue.500"} />
              </Flex>
            }
          >
            <Canvas
              shadows
              camera={{ position: [0, 8.3, 9], fov: 17 }}
              style={{ width: "100%", height: "100%" }} // Canvas ocupa el 100% de su contenedor
            >
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[5, 10, 5]}
                intensity={1.1}
                castShadow
              />
              <SoftShadows size={24} samples={16} />
              <Environment preset="sunset" />
              {/* Grupo que contiene todas las teclas */}
              <group position={[1.5, -3, 0]}>
                {[row1, row2, row3, row4].flatMap((row, i) =>
                  row.map((tech, j) => {
                    // Posicionamiento de las teclas en el espacio 3D
                    const z = -5.3 + i * 1.5;
                    const x = i === 3 ? (j === 1 ? -1 : j === 0 ? -4 : 2) : -4 + j * 1.5;
                    const rotation = [0.2 - i * 0.05, 0, 0];
                    const isSpace = i === 3 && j === 1; // Identifica la barra espaciadora
                    const KeyComponent = isSpace ? SpaceBar : Key; // Elige el componente de tecla

                    return (
                      <KeyComponent
                        key={tech.name}
                        icon={tech.icon}
                        position={[x, 0, z]}
                        rotation={rotation}
                        color={techColors[tech.name]}
                        onClick={() => setSelectedTech(tech)} 
                        width={isSpace ? 5 : undefined} 
                      />
                    );
                  })
                )}
              </group>
              <ContactShadows position={[0, -0.05, 0]} opacity={0.5} scale={20} blur={2} far={10} />
              <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.1} />
            </Canvas>
          </Suspense>
        </Box>

        {/* Contenedor de la Tarjeta de Descripción */}
        <Flex
          flex="1" // Ocupa 50% del espacio disponible
          width={{ base: "100%", md: "50%" }} // Explícitamente 100% en móvil, 50% en escritorio
          justifyContent="center" 
          alignItems="center" 
          minHeight={{ base: "200px", md: "300px" }} 
        >
          {selectedTech ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                backdropFilter: "blur(12px)",
                background: cardBg,
                borderRadius: "1rem",
                border: `1px solid ${cardBorder}`,
                padding: "1.5rem",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                color: cardText,
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "100%",
                width: "100%", 
              }}
            >
              {/* Ícono de la tecnología seleccionada */}
              <selectedTech.icon
                size={48}
                color={techColors[selectedTech.name]}
                style={{ marginBottom: "0.5rem" }}
              />
              {/* Nombre de la tecnología */}
              <Heading as="h3" size="lg" mb="0.5rem" color={cardText}>
                {selectedTech.name}
              </Heading>
              {/* Descripción de la tecnología */}
              <Text fontSize="md" mt="0.5rem" color={cardText}>
                {`${selectedTech.description}`}
              </Text>
              {/* Botón para cerrar la descripción */}
              <Button size="sm" mt="4" colorScheme="green" onClick={() => setSelectedTech(null)}>
                Cerrar
              </Button>
            </motion.div>
          ) : (
            // Mensaje cuando no hay tecnología seleccionada
            <Text
              color={colorMode === "dark" ? "#aaa" : "#555"}
              fontStyle="italic"
              textAlign="center"
              p={4} // Añadir padding para que no se pegue a los bordes
            >
              Selecciona una tecnología del teclado para verla aquí 👉
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Tecnologias3D;
