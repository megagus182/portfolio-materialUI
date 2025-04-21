import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionButton = motion(Button);


const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const Links = [
    { name: "Inicio", id: "inicio" },
    { name: "Sobre mí", id: "sobremi" },
    { name: "Proyectos", id: "proyectos" },
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
    const bg = useColorModeValue("white", "gray.900");
    const shadow = useColorModeValue("sm", "dark-lg");

    return (
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

                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Abrir menú"
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />

                <HStack spacing={4} display={{ base: "none", md: "flex" }}>
                    {Links.map((link) => (
                        <NavLink key={link.id} {...link} />
                    ))}
                </HStack>
            </Flex>

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
    );
}
