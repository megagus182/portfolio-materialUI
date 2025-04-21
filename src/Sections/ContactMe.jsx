import {
  Box,
  Heading,
  Image,
  Button,
  Tooltip,
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  useToast,
  Input,
  Textarea,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import emailjs from "emailjs-com";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import cv from "../images/cv.png";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const MotionFlex = motion(Flex);

export default function Contactame() {
  const [entradaCorreo, setEntradaCorreo] = useState("");
  const [entradaNombre, setEntradaNombre] = useState("");
  const [entradaMensaje, setEntradaMensaje] = useState("");

  const [nombreTocada, setNombreTocada] = useState(false);
  const [correoTocada, setCorreoTocada] = useState(false);
  const [mensajeTocada, setMensajeTocada] = useState(false);
  const [cargando, setCargando] = useState(false);

  const formulario = useRef();
  const notificacion = useToast();

  const formBg = useColorModeValue("white", "gray.700");
  const formTextColor = useColorModeValue("gray.800", "white");
  const errorColor = useColorModeValue("red.500", "red.400");
  const buttonBg = useColorModeValue("teal.500", "teal.400");
  const buttonColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("white", "whiteAlpha.900");

  const esErrorNombre = nombreTocada && entradaNombre === "";
  const esErrorCorreoVacio = correoTocada && entradaCorreo === "";
  const esErrorCorreoInvalido = correoTocada && entradaCorreo !== "" && !isValidEmail(entradaCorreo);
  const esErrorMensaje = mensajeTocada && entradaMensaje === "";

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const resetearFormulario = () => {
    setEntradaNombre("");
    setEntradaCorreo("");
    setEntradaMensaje("");
    setNombreTocada(false);
    setCorreoTocada(false);
    setMensajeTocada(false);
  };

  function enviarCorreo(e) {
    e.preventDefault();
    if (!esErrorNombre && !esErrorCorreoVacio && !esErrorCorreoInvalido && !esErrorMensaje) {
      setCargando(true);
      emailjs
        .sendForm("service_kgwu2uc", "template_i0822lk", formulario.current, "xSRbX8a-Xu0ZzjQ5h")
        .then(() => {
          notificacion({
            title: "Tu correo ha sido enviado.",
            description: "¡Gracias por contactarme!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          resetearFormulario();
        })
        .catch(() => {
          notificacion({
            title: "Error al enviar.",
            description: "Por favor intenta más tarde.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => setCargando(false));
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <Box
      as="section"
      id="contacto"
      paddingY={{ base: '8', md: '16' }}
      color="white"
      style={{ userSelect: 'none' }}
      py={16}
      px={{ base: 4, md: 8 }}
      background="transparent"
    >
      <Heading textAlign="center" mb={10} color={headingColor} style={{ userSelect: 'none' }}>
        Contáctame
      </Heading>

      <MotionFlex
        ref={ref}
        direction="column"
        maxW="600px"
        mx="auto"
        bg={formBg}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        color={formTextColor}
        variants={formVariants}
        initial="hidden"
        animate={controls}
      >
        <form ref={formulario} onSubmit={enviarCorreo}>
          <Stack spacing={5}>
            <FormControl isInvalid={esErrorNombre}>
              <FormLabel style={{ userSelect: 'none' }}>Nombre</FormLabel>
              <Input
                name="from_name"
                value={entradaNombre}
                onChange={(e) => setEntradaNombre(e.target.value)}
                onBlur={() => setNombreTocada(true)}
                placeholder="Tu nombre"
                bg="whiteAlpha.300"
                color="black"
              />
              {esErrorNombre && (
                <FormHelperText color={errorColor}>El nombre es requerido.</FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid={esErrorCorreoVacio || esErrorCorreoInvalido}>
              <FormLabel style={{ userSelect: 'none' }}>Correo electrónico</FormLabel>
              <Input
                name="email"
                type="email"
                value={entradaCorreo}
                onChange={(e) => setEntradaCorreo(e.target.value)}
                onBlur={() => setCorreoTocada(true)}
                placeholder="tu@email.com"
                bg="whiteAlpha.300"
                color="black"
              />
              {esErrorCorreoVacio && (
                <FormHelperText color={errorColor}>El correo es requerido.</FormHelperText>
              )}
              {esErrorCorreoInvalido && (
                <FormHelperText color={errorColor}>El correo no es válido.</FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid={esErrorMensaje}>
              <FormLabel style={{ userSelect: 'none' }}>Mensaje</FormLabel>
              <Textarea
                name="message"
                value={entradaMensaje}
                onChange={(e) => setEntradaMensaje(e.target.value)}
                onBlur={() => setMensajeTocada(true)}
                placeholder="¿Qué te gustaría decirme?"
                bg="whiteAlpha.300"
                color="black"
              />
              {esErrorMensaje && (
                <FormHelperText color={errorColor}>El mensaje no puede estar vacío.</FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              bg={buttonBg}
              color={buttonColor}
              isLoading={cargando}
              loadingText="Enviando"
              _hover={{ bg: "teal.600" }}
            >
              Enviar
            </Button>
          </Stack>
        </form>

        <Flex justify="center" gap={6} mt={10} style={{ userSelect: 'none' }}>
          <Tooltip label="GitHub">
            <a href="https://github.com/megagus182" target="_blank" rel="noopener noreferrer">
              <Image src={github} boxSize="40px" />
            </a>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <a href="www.linkedin.com/in/gacr1990" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin} boxSize="40px" />
            </a>
          </Tooltip>
          <Tooltip label="Currículum">
            <a href="https://drive.google.com/file/d/1kxpDfRlRijc-CrzFBDapLT2yi-iZtUu3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Image src={cv} boxSize="40px" />
            </a>
          </Tooltip>
        </Flex>
      </MotionFlex>
    </Box>
  );
}