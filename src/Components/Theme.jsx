import { useColorMode } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Theme() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Box zIndex={1} position={"fixed"} right="8" top="75">
        <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}  
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>
    )
  }