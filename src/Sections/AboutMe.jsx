import { Box, Typography, Paper } from "@mui/material";
import experience from "../images/experience.png";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <Paper square>
      <Box display={"flex"} className="AboutMe">
        {/* Left */}
        <Box className="LeftSide" alignSelf={"center"}>
          <img width={"100%"} src={experience} alt="experiences" />
        </Box>
        {/* Right */}
        <Box className="RightSide">
          <Typography marginTop={"20px"} variant="h2">
            About Me
          </Typography>
          <br></br>
          <Typography width={"100%"} fontSize="md">
            I've always been interested in the world of technology since I was
            little, i have a bachelor's degree in computer systems.
          </Typography>
          <br></br>
          <Typography width={"100%"} fontSize="md">
            I worked in other areas outside of mine, such as logistics and
            transportation in which, I could develop many Soft Skills, such as
            leadership, communication, teamwork, problem solving and many more.
          </Typography>
          <br></br>
          <Typography width={"100%"} fontSize="md">
            Now that I gave myself a chance, I took an intensive bootcamp, to
            update and retake what I like, the ⌨ programming and technology, so
            I took seriously the career of Full Stack Developer. Of the projects
            I did and the experiences I took, I can handle for now the following
            technologies and methodologies💼:
          </Typography>
          <br></br>
          <Typography width={"100%"} textAlign={"center"} fontSize="md">
            JavaScript | React | Redux | HTML5 | CSS3 | NodeJs | SQL | Express |
            Scrum | GIT | Heroku | Netlify |
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
