import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const WorkingOn = () => {
  return (
    <VStack
      rounded="lg"
      bg="repeating-linear-gradient(45deg, #ff0, #ff0 20px, #000 20px, #000 40px)"
      mb={100}
    >
      <VStack
        rounded="lg"
        m={4}
        p={4}
        backdropFilter="auto"
        backdropBlur="10px"
      >
        <Heading>Trabalhando ainda!</Heading>
        <Text>Em processo de desenvolvimento 💻💣🤯</Text>
      </VStack>
    </VStack>
  );
};

export default WorkingOn;
