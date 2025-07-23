import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Box, useColorMode } from '@chakra-ui/react';

const ParticlesBackground = () => {
  const { colorMode } = useColorMode();

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: colorMode === 'dark' ? "#0f0f0f" : "#f8f8f8", // Cambia el fondo según el modo
      },
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: colorMode === 'dark' ? "#00ccff" : "#007bff", // Color de partícula
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
      },
      size: {
        value: { min: 1, max: 2 },
      },
      lineLinked: {
        enable: true,
        distance: 150,
        color: colorMode === 'dark' ? "#00ccff" : "#007bff",
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
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
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
