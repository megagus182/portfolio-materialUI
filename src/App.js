import { BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from "./Sections/Home";
import Theme from './Components/Theme';
import AboutMe from "./Sections/AboutMe";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";
import Navbar from './Components/Navbar';
import Layout from './Components/ParticlesBackground'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
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
        <Navbar style={{ zIndex: 1 }} /> {/* Asegúrate de que la Navbar esté encima */}
        <Layout>
          <Box pt="64px"> {/* El contenido principal */}
            <Theme />
            <Home />
            <Projects />
            <AboutMe />
            <ContactMe />
          </Box>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;