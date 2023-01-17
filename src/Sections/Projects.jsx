import { Box, Typography, Paper } from "@mui/material";

import Imagenes from "./Imagenes";
import ImagenesF from "./ImagenesFood";
import ImagenesArt from "./ImagenesArt";

export default function Projects() {
  return (
    <Paper square>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        className="Projects"
      >
        <Typography variant="h2" textAlign={"center"} marginTop={"20px"}>
          Projects
        </Typography>
        <br></br>
        <Typography variant="h3" margin={"20px"}>
          GameScript
        </Typography>
        <Imagenes />
        <br></br>
        <Typography variant="h3" margin={"20px"}>
          ArtGiss
        </Typography>
        <ImagenesArt />
        <br></br>
        <Typography variant="h3" margin={"20px"}>
          FoodApp
        </Typography>
        <ImagenesF />

        <Box height="auto"></Box>
      </Box>
    </Paper>
  );
}
