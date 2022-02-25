import {
  Container,
  Flex,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { NAVBAR_HEIGHT } from "theme/constants";
import Blur from "./Blur";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      backdropFilter="auto"
      backdropBlur="8px"
      zIndex="999"
      position="fixed"
      top={0}
      align="center"
      h={NAVBAR_HEIGHT}
      w="100vw"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between">
          <Text>Arthur Mendes</Text>
          <HStack>
            <HStack>
              {colorMode === "light" ? <FiSun /> : <FiMoon />}
              <Switch onChange={toggleColorMode} />
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
