import {
  Box,
  Image,
  Text,
  Heading,
  Link,
  HStack,
  Tag,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  liveLink,
  codeLink,
  frontendLink,
  backendLink,
}) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
      bg={bg}
      boxShadow="lg"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-6px)", shadow: "xl" }}
    >
      {image && (
        <Image src={image} alt={title} w="100%" h="200px" objectFit="cover" />
      )}
      <Box p={4}>
        <Heading fontSize="xl" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" mb={3} textAlign="justify">
          {Array.isArray(description) ? description.join(" ") : description}
        </Text>
        <HStack wrap="wrap" spacing={2} mb={4}>
          {tech?.map((t) => (
            <Tag key={t} colorScheme="teal">
              {t}
            </Tag>
          ))}
        </HStack>
        <HStack spacing={3}>
          {liveLink && (
            <Link href={liveLink} isExternal>
              <Button size="sm" colorScheme="green" leftIcon={<FaExternalLinkAlt />}>
                Ver App
              </Button>
            </Link>
          )}
          {frontendLink && (
            <Link href={frontendLink} isExternal>
              <Button size="sm" variant="outline" leftIcon={<FaGithub />}>
                Frontend
              </Button>
            </Link>
          )}
          {backendLink && (
            <Link href={backendLink} isExternal>
              <Button size="sm" variant="outline" leftIcon={<FaGithub />}>
                Backend
              </Button>
            </Link>
          )}
          {!frontendLink && !backendLink && codeLink && (
            <Link href={codeLink} isExternal>
              <Button size="sm" variant="outline" leftIcon={<FaGithub />}>
                Código
              </Button>
            </Link>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
