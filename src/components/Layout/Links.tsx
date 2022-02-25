import { Box, Center, Divider, Flex, Spacer, VStack } from "@chakra-ui/react";
import LinkPage from "components/Link";
import { IconsData } from "data/links";
import React from "react";

const Links = () => {
  function getLinkButtons() {
    return IconsData.map(({ icon, label, link }, index) => (
      <LinkPage link={link} icon={icon} key={index} copiable={false} square />
    ));
  }

  return (
    <Center
      display={["none", "none", "flex"]}
      h="100vh"
      position="fixed"
      left={0}
    >
      <VStack>{getLinkButtons()}</VStack>
    </Center>
  );
};

export default Links;
