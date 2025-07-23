import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const Links = [
    { name: "Inicio", id: "inicio" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Skills", id: "skills" },
    { name: "Contacto", id: "contacto" },
];

const NavLink = ({ name, id }) => {
    const hoverBg = useColorModeValue("teal.100", "teal.700");
    const textColor = useColorModeValue("gray.800", "gray.100");

    return (
        <MotionButton
            variant="ghost"
            color={textColor}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            _hover={{ bg: hoverBg }}
            onClick={() => scrollToSection(id)}
        >
            {name}
        </MotionButton>
    );
};

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("white", "gray.900");
    const shadow = useColorModeValue("sm", "dark-lg");

    return (
        <>
            {/* NAVBAR PRINCIPAL */}
            <Box position="fixed" top="0" width="100%" bg={bg} zIndex="1000" boxShadow={shadow}>
                <Flex
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="container.xl"
                    mx="auto"
                    px={4}
                >
                    <Box fontWeight="bold" color="teal.400">
                        Gustavo.dev
                    </Box>

                    {/* MOBILE: HAMBURGUER + TOGGLE THEME */}
                    <HStack spacing={2} display={{ base: "flex", md: "none" }}>
                        <MotionIconButton
                            size="md"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Abrir menú"
                            onClick={isOpen ? onClose : onOpen}
                            whileTap={{ scale: 0.9 }}
                        />
                        <MotionIconButton
                            aria-label="Toggle color mode"
                            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            onClick={toggleColorMode}
                            variant="ghost"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        />
                    </HStack>

                    {/* DESKTOP: NAV LINKS (sin botón de tema) */}
                    <HStack spacing={4} display={{ base: "none", md: "flex" }} align="center">
                        {Links.map((link) => (
                            <NavLink key={link.id} {...link} />
                        ))}
                    </HStack>
                </Flex>

                {/* MOBILE MENU */}
                {isOpen && (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as="nav" spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.id} {...link} />
                            ))}
                        </Stack>
                    </Box>
                )}
            </Box>

            {/* BOTÓN FLOTANTE EN ESCRITORIO */}
            <Box
                zIndex={1001}
                position={"fixed"}
                right="8"
                top="75px"
                display={{ base: "none", md: "block" }}
            >
                <MotionButton
                    onClick={toggleColorMode}
                    leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {colorMode === "light" ? "Dark" : "Light"} Mode
                </MotionButton>
            </Box>
        </>
    );
}
