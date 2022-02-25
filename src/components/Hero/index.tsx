import React from "react";
import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import LinkPage from "components/Link";

const HeroSection = () => {
  return (
    <VStack py="25vh" spacing={8}>
      <VStack spacing={6} textAlign="center" maxW="75%">
        <Heading size="2xl">Meu nome é Arthur Mendes Pereira</Heading>
        <Text>
          Apaixonado por tecnologia, sou desenvolvedor FullStack Javascript
        </Text>
      </VStack>

      <Stack direction={["column", "row"]}>
        <Button rightIcon={<FiChevronDown />} rounded="full">
          Vem conversar comigo
        </Button>

        <LinkPage link="GITHUB" icon={<SiGithub />} text="Github" />

        <LinkPage link="LINKEDIN" icon={<SiLinkedin />} text="Linkedin" />
      </Stack>
    </VStack>
  );
};

export default HeroSection;
