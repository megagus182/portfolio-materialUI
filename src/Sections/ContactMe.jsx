import { Box, Typography, Button, FormControl, FormLabel, FormHelperText, Paper } from "@mui/material";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import pdf from "../images/CVGustavoCastillo.pdf";
import { useState } from "react";
import cv from "../images/cv.png";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css"


export default function ContactMe() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const [inputName, setInputName] = useState("");
  const handleInputNameChange = (e) => setInputName(e.target.value);
  const [inputMessage, setInputMessage] = useState("");
  const handleInputMessageChange = (e) => setInputMessage(e.target.value);
  const isEmailError = input === "";
  const isNameError = inputName === "";
  const isMessageError = inputMessage === "";
  const form = useRef();
  // const toast = useToast()

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kgwu2uc",
        "template_i0822lk",
        form.current,
        "UoL2za3bsCOGDob5k"
      )
      .then((res) => {
        
        // toast({
        //   title: 'Your email has send.',
        //   description: "Thank you for contact me!",
        //   status: 'success',
        //   duration: 9000,
        //   isClosable: true,
        // })
      });
  }


  return (
    <Paper square>
    <Box className="Contact" >
      <Typography textAlign={"center"} color={"white"} variant="h2" size="lg">
        Contact Me
      </Typography>
      <Box display={"flex"} height="90%">
        {/* LEFT */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          textAlign={"center"}
          width={"50%"}
        >
          {/* ICONOS */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            flexflow={"wrap"}
          >
            <Box>
              {/* <Tooltip label="Go to my Github" aria-label='A tooltip'> */}
                <a href="https://github.com/megagus182">
                  <img
                    height={"fit-content"}
                    width={"10%"}
                    src={github}
                    alt="github"
                  />
                </a>
              
              {/* </Tooltip> */}
             <Typography color={"white"}>Github</Typography> 
            </Box>
            <Box>
            {/* <Tooltip label="Go to my LinkedIn" aria-label='A tooltip'> */}
                <a href="https://www.linkedin.com/in/gacr1990/">
                  <img
                    height={"fit-content"}
                    width={"10%"}
                    src={linkedin}
                    alt="linkedin"
                    borderradius={"50px"}
                  />
                </a>
           
              {/* </Tooltip> */}
              <Typography color={"white"}>LinkedIn</Typography>
            </Box>
            <Box>
            {/* <Tooltip label="Download CV" aria-label='A tooltip'> */}
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CVGustavoCastillo.pdf"
                >
                  <img
                    borderradius={"50px"}
                    height={"fit-content"}
                    width={"10%"}
                    src={cv}
                    alt="cv"
                  />
                </a>
              {/* </Tooltip> */}
              <Typography color={"white"}>Curriculum</Typography>
            </Box>
          </Box>
        </Box>
        {/* FORMULARIO */}
        <Box
          width={"50%"}
          marginTop={"50px"}
          marginBottom={"50px"}
          marginRight={"30px"}
          className="rightSideFromHome"
        >
          <Box>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <input type="text" placeholder="Name" name="from_name" value={inputName}
                  onChange={handleInputNameChange}/>
                {!isNameError ? (
                <FormHelperText>Enter your Name please.</FormHelperText>
                ) : (
                  <FormHelperText >
                  Name is required.
                </FormHelperText>
              )}
              <FormLabel>Email</FormLabel>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isEmailError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the answer.
                  </FormHelperText>
                ) : (
                  <FormHelperText >
                    Email is required.
                  </FormHelperText>
                )}
                <FormLabel>Message</FormLabel>
                <textarea
                  type="text"
                  height={"20"}
                  name="message"
                  placeholder="Message"
                  value={inputMessage}
                  onChange={handleInputMessageChange}
                />
                {!isMessageError ? (
                <FormHelperText>
                  Please write a message to contact me.
                </FormHelperText>
                 ) : (
                  <FormHelperText >
                  Message is required.
                </FormHelperText>
              )}
                <br></br>
                {!isEmailError && !isNameError && !isMessageError ? (
                <Button type="submit">Submit</Button>
                ):(
                  null
                )}
              </FormControl>
            </form>
          </Box>
        </Box>
          
      </Box>
    </Box>
    </Paper>
  );
}
