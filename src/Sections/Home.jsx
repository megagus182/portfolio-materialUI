import { Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import perfil from "../images/perfilSinFondo.png";
import icono1 from "../images/css.png";
import icono2 from "../images/html.png";
import icono3 from "../images/js.PNG";
import icono4 from "../images/node.png";
import icono5 from "../images/react.png";
import icono6 from "../images/redux.png";
import icono7 from "../images/sql.png";
import "./Fonts.css";
import "./Home.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const Gus = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    background: "linear-gradient(90deg, #2b6cb0, #38B2AC)",
    bgClip: "text",
    fontWeight: 300,
    fontSize: "3.75rem",
    fontFamily: "gecko",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  }));

  return (
    <Paper square >
      <Box className="Home">
        {/* LEFT */}
        <Box className="leftSideFromHome">
          <Box className="leftSideFromHomeChildren">
            <Typography variant="h2" margin={"10px"}>
              👋 Hello, my name is
            </Typography>
            <Box>
              <Gus variant="h2">Gustavo Castillo</Gus>
            </Box>
            <Typography margin={"10px"} variant="h2" size="xl">
              FullStack Web Developer
            </Typography>
            {/* ICONOS FULL STACK */}
            <Box className={"iconosFullStack"}>
              <img className="iconoFull" src={icono1} alt="icon1" />
              <img className="iconoFull" src={icono2} alt="icon2" />
              <img className="iconoFull" src={icono3} alt="icon3" />
              <img className="iconoFull" src={icono4} alt="icon4" />
              <img className="iconoFull" src={icono5} alt="icon5" />
              <img className="iconoFull" src={icono6} alt="icon6" />
              <img className="iconoFull" src={icono7} alt="icon7" />
            </Box>
          </Box>
        </Box>
        {/* RIGHT */}
        <Box className="rightSideFromHome">
          <Box className="rightSideFromHomeChild">
            <Box className="rightSideFromHomeChildChild">
              <img className="imgpefil" src={perfil} alt="imgPerfil" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
