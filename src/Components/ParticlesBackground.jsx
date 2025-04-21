import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Box } from '@chakra-ui/react';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // Puedes realizar acciones después de que las partículas se carguen
    }, []);

    const options = {
        background: {
            color: {
                value: "#0f0f0f", // Fondo oscuro profundo
            },
        },
        particles: {
            number: {
                value: 60, // Ajusta la cantidad según prefieras
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#00ccff", // Azul cian para un toque tecnológico
            },
            shape: {
                type: "circle", // Puedes probar "line" o "square"
            },
            opacity: {
                value: 0.7,
            },
            size: {
                value: { min: 1, max: 2 },
            },
            lineLinked: { // Para crear las líneas de conexión
                enable: true,
                distance: 150,
                color: "#00ccff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out",
                attract: {
                    enable: false,
                },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // Al pasar el mouse, las partículas se "agarran"
                    parallax: { enable: false, force: 60 },
                },
                onClick: {
                    enable: true,
                    mode: "push", // Al hacer clic, se empujan nuevas partículas
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1,
                    },
                },
                push: {
                    quantity: 2,
                },
            },
        },
        retina_detect: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}
        />
    );
};

const Layout = ({ children }) => {
    return (
        <Box position="relative" minHeight="100vh">
            <ParticlesBackground />
            <Box position="relative" zIndex={0}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;