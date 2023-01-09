import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from "../src/Sections/Home"
import AboutMe from "../src/Sections/AboutMe"
import ContactMe from "../src/Sections/ContactMe"
import Projects from "../src/Sections/Projects"
import NavBar from "../src/Sections/NavBar"
import { MaterialUISwitch } from "./Switch"
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const handleChange = (event) => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: red[500],
      },
    },
  });
  theme.typography.h2 = {
    fontSize: '1.2rem',
    '@media (min-width:300px)': {
      fontSize: '1.7rem',
    },
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  };
  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:300px)': {
      fontSize: '1.2rem',
    },
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MaterialUISwitch sx={{ m: 1 }} onChange={handleChange} />
      <NavBar />
        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
