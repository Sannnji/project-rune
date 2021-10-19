import { ButtonGroup, IconButton } from "@chakra-ui/react";

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      aria-label="LinkedIn"
      className="fab fa-linkedin"
      href="https://www.linkedin.com/in/jamesji98/"
      fontSize="20px"
      color="white"
      _hover={{ color: "#C7B377", bg: "white" }}
    />
    <IconButton
      as="a"
      aria-label="GitHub"
      className="fab fa-github-square"
      href="https://github.com/Sannnji"
      fontSize="20px"
      color="white"
      _hover={{ color: "#C7B377", bg: "white" }}
    />
  </ButtonGroup>
);
