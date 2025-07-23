import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  useToast,
  Input,
  Textarea,
  FormHelperText, // Se mantiene para hints, pero usaremos FormErrorMessage para errores
  FormErrorMessage, // Importar para mensajes de error explícitos
  Stack,
  Tooltip,
  IconButton, // Importar IconButton para los íconos sociales
  Text, // Para el texto de la descripción
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "emailjs-com";

// Importar íconos de React Icons para mayor flexibilidad y consistencia
import { FaGithub, FaLinkedinIn, FaFileAlt } from "react-icons/fa";
import { MdSend } from "react-icons/md"; // Ícono para el botón de enviar

// Función de validación de correo (se mantiene, es robusta)
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const MotionFlex = motion(Flex); // Para animar el contenedor principal del formulario

// Componente para los enlaces sociales (nueva implementación)
function SocialLink({ href, label, icon: IconComponent }) {
  const iconColor = useColorModeValue("gray.700", "whiteAlpha.800"); // Color del ícono
  const hoverColor = useColorModeValue("blue.500", "blue.300"); // Color al hacer hover

  return (
    <Tooltip label={label} hasArrow placement="top">
      <IconButton
        as="a" // Renderiza como un 'a' para la navegación
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        icon={<IconComponent size="28px" />} // Tamaño del ícono dentro del botón
        variant="ghost" // Estilo fantasma para que el ícono sea el foco
        color={iconColor}
        _hover={{ color: hoverColor, transform: "scale(1.1)" }} // Efecto de escala al hacer hover
        transition="all 0.2s ease-in-out"
        boxSize="56px" // Tamaño del IconButton para un buen touch target
        borderRadius="full" // Hace el botón circular
      />
    </Tooltip>
  );
}

export default function Contactame() {
  // Estados para los campos del formulario
  const [entradaCorreo, setEntradaCorreo] = useState("");
  const [entradaNombre, setEntradaNombre] = useState("");
  const [entradaMensaje, setEntradaMensaje] = useState("");

  // Estados para indicar si el campo ha sido "tocado" (blurred)
  const [nombreTocada, setNombreTocada] = useState(false);
  const [correoTocada, setCorreoTocada] = useState(false);
  const [mensajeTocada, setMensajeTocada] = useState(false);

  const [cargando, setCargando] = useState(false); // Estado de carga del envío

  const formulario = useRef(); // Referencia al formulario para emailjs
  const notificacion = useToast(); // Hook para notificaciones

  // Colores dinámicos basados en el tema
  const formBg = useColorModeValue("white", "gray.800");
  const formTextColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const errorColor = useColorModeValue("red.500", "red.400");
  const headingColor = useColorModeValue("gray.900", "whiteAlpha.900");
  // Fondo exterior semitransparente para ver las partículas
  const outerBg = useColorModeValue("rgba(248, 248, 248, 0.72)", "rgba(15, 15, 15, 0.76)");

  // Lógica de validación mejorada: muestra error si tocado Y es inválido
  const esErrorNombreCorto = nombreTocada && entradaNombre.trim().length < 4;
  const esErrorCorreoVacio = correoTocada && entradaCorreo.trim() === "";
  const esErrorCorreoInvalido = correoTocada && entradaCorreo.trim() !== "" && !isValidEmail(entradaCorreo);
  const esErrorMensajeCorto = mensajeTocada && entradaMensaje.trim().length < 10;

  // El botón se deshabilita si CUALQUIER campo es inválido
  const botonDeshabilitado =
    entradaNombre.trim().length < 4 ||
    entradaCorreo.trim() === "" ||
    !isValidEmail(entradaCorreo) ||
    entradaMensaje.trim().length < 10;

  // Animación al entrar en vista
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Ajustar amount para disparar antes

  // Función para resetear el formulario
  const resetearFormulario = () => {
    setEntradaNombre("");
    setEntradaCorreo("");
    setEntradaMensaje("");
    setNombreTocada(false);
    setCorreoTocada(false);
    setMensajeTocada(false);
  };

  // Función para enviar el correo
  function enviarCorreo(e) {
    e.preventDefault();
    // Forzar que todos los campos sean tocados para mostrar todos los errores
    setNombreTocada(true);
    setCorreoTocada(true);
    setMensajeTocada(true);

    // Si hay errores, no se envía y se muestra una notificación de advertencia
    if (botonDeshabilitado) {
      notificacion({
        title: "Por favor, revisa el formulario.",
        description: "Hay campos que necesitan tu atención antes de enviar.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top", // Posición de la notificación
      });
      return; // Detener el envío si hay errores
    }

    setCargando(true);
    emailjs
      .sendForm("service_kgwu2uc", "template_i0822lk", formulario.current, "xSRbX8a-Xu0ZzjQ5h")
      .then(() => {
        notificacion({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarme, te responderé pronto.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        resetearFormulario();
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error); // Log del error para depuración
        notificacion({
          title: "Error al enviar el mensaje.",
          description: "Por favor, intenta de nuevo más tarde o contáctame por LinkedIn.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      })
      .finally(() => setCargando(false));
  }

  // Efecto para disparar la animación cuando el componente está en vista
  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  // Variantes de animación para el formulario
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Transición más rápida y suave
  };

  return (
    <Box
      as="section"
      id="contacto"
      paddingY={{ base: 12, md: 20 }} // Más padding vertical para mejor espaciado
      px={{ base: 4, md: 8 }}
      background={outerBg}
      borderRadius="xl"
      boxShadow="2xl"
      maxW="1200px" // Limitar el ancho máximo para una mejor legibilidad en pantallas muy grandes
      mx="auto" // Centrar el contenedor principal
      my={16} // Margen vertical para separar de otras secciones
    >
      <Heading
        textAlign="center"
        mb={{ base: 8, md: 12 }} // Más margen inferior
        color={headingColor}
        fontWeight="extrabold" // Más énfasis en el título
        fontSize={{ base: "3xl", md: "4xl" }} // Tamaño de fuente más grande
        letterSpacing="wide" // Ligero espaciado entre letras
      >
        Contáctame
      </Heading>

      {/* Contenedor principal con Flexbox para el layout de dos columnas */}
      <MotionFlex
        ref={ref}
        direction={{ base: "column", md: "row" }} // Columna en móvil, fila en escritorio
        maxW="900px" // Limitar el ancho del contenido interno
        mx="auto" // Centrar el contenido interno
        gap={{ base: 8, md: 12 }} // Espacio entre las columnas
        alignItems="flex-start" // Alinea los elementos al inicio de la fila
        variants={formVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Columna del Formulario */}
        <Box
          flex="1" // Ocupa el espacio disponible
          minW={{ base: "100%", md: "450px" }} // Ancho mínimo para el formulario en escritorio
          bg={formBg}
          p={{ base: 6, md: 8 }} // Padding responsivo
          borderRadius="lg"
          boxShadow="xl" // Sombra más pronunciada para el formulario
          color={formTextColor}
        >
          <Text mb={6} fontSize="lg" color={formTextColor}>
            ¿Tienes un proyecto en mente o simplemente quieres saludar? ¡No dudes en enviarme un mensaje!
          </Text>
          <form ref={formulario} onSubmit={enviarCorreo}>
            <Stack spacing={5}>
              <FormControl isInvalid={esErrorNombreCorto}>
                <FormLabel htmlFor="nombre">Nombre</FormLabel>
                <Input
                  id="nombre"
                  name="from_name"
                  value={entradaNombre}
                  onChange={(e) => setEntradaNombre(e.target.value)}
                  onBlur={() => setNombreTocada(true)}
                  placeholder="Tu nombre completo" // Placeholder más descriptivo
                  focusBorderColor="blue.400" // Color del borde al enfocar
                />
                <FormErrorMessage>{esErrorNombreCorto && "El nombre debe tener al menos 4 letras."}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={esErrorCorreoVacio || esErrorCorreoInvalido}>
                <FormLabel htmlFor="correo">Correo electrónico</FormLabel>
                <Input
                  id="correo"
                  name="email"
                  type="email"
                  value={entradaCorreo}
                  onChange={(e) => setEntradaCorreo(e.target.value)}
                  onBlur={() => setCorreoTocada(true)}
                  placeholder="ejemplo@dominio.com" // Placeholder más descriptivo
                  focusBorderColor="blue.400"
                />
                <FormErrorMessage>
                  {esErrorCorreoVacio && "El correo es requerido."}
                  {esErrorCorreoInvalido && "El correo no es válido."}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={esErrorMensajeCorto}>
                <FormLabel htmlFor="mensaje">Mensaje</FormLabel>
                <Textarea
                  id="mensaje"
                  name="message"
                  value={entradaMensaje}
                  onChange={(e) => setEntradaMensaje(e.target.value)}
                  onBlur={() => setMensajeTocada(true)}
                  placeholder="Escribe tu mensaje aquí (mínimo 10 caracteres)..." // Placeholder más descriptivo
                  size="md" // Tamaño del textarea
                  rows={6} // Altura inicial del textarea
                  focusBorderColor="blue.400"
                />
                <FormErrorMessage>{esErrorMensajeCorto && "El mensaje debe tener al menos 10 caracteres."}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue" // Usar un colorScheme de Chakra que se adapte al tema
                size="lg" // Botón más grande para mayor prominencia
                isLoading={cargando}
                isDisabled={botonDeshabilitado}
                rightIcon={<MdSend />} // Ícono de enviar para mayor claridad
                _hover={{ opacity: 0.9, transform: "translateY(-2px)" }} // Efecto de hover sutil
                _active={{ transform: "translateY(0)" }} // Efecto al hacer click
                transition="all 0.2s ease-in-out"
                mt={4} // Margen superior para separar del último campo
              >
                Enviar mensaje
              </Button>
            </Stack>
          </form>
        </Box>

        {/* Columna de Enlaces Sociales */}
        <Flex
          flex="1" // Ocupa el espacio disponible
          direction="column" // Apilar los elementos verticalmente
          alignItems="center" // Centrar los íconos horizontalmente
          justifyContent="center" // Centrar verticalmente en la columna
          p={{ base: 6, md: 8 }} // Padding responsivo
          bg={formBg} // Fondo similar al formulario para coherencia
          borderRadius="lg"
          boxShadow="xl"
          minH={{ base: "auto", md: "400px" }} // Altura mínima para alinear con el formulario
        >
          <Heading as="h3" size="md" mb={6} color={headingColor} textAlign="center">
            También puedes encontrarme en:
          </Heading>
          <Stack direction={{ base: "row", md: "column" }} spacing={{ base: 6, md: 8 }}>
            <SocialLink
              href="https://github.com/megagus182"
              label="GitHub"
              icon={FaGithub}
            />
            <SocialLink
              href="https://www.linkedin.com/in/gacr1990"
              label="LinkedIn"
              icon={FaLinkedinIn}
            />
            <SocialLink
              href="https://drive.google.com/file/d/1FQSm14Qn7XWoZlvdIc6LYMldXUaDPgO9/view?usp=sharing"
              label="Descargar Currículum"
              icon={FaFileAlt}
            />
          </Stack>
        </Flex>
      </MotionFlex>
    </Box>
  );
}
