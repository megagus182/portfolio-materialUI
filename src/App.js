import { BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";
import Navbar from './Components/Navbar';
import Layout from './Components/ParticlesBackground'
import Tecnologias3D from './Components/Tecnologias3D';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
    lightTheme: {
    background: '#f8f8f8', // Un blanco suave, no un blanco puro para evitar fatiga visual
    text: '#333333',     // Un gris oscuro para el texto principal que contrasta bien
    particles: '#007bff', // Un azul brillante para las partículas, menos intenso que el cian del oscuro pero vibrante
    secondaryText: '#666666', // Un gris medio para texto secundario o descriptivo
    borders: '#e0e0e0',    // Un gris claro para bordes o separadores
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors  });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar style={{ zIndex: 1 }} /> 
        <Layout>
          <Box pt="64px">
            <Home />
            <Projects />
            <Tecnologias3D/>
            <ContactMe />
          </Box>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;