import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import LinkPage from "components/Link";
import { IconsData } from "data/links";

const Footer = () => {
  function getLinkButtons() {
    return IconsData.map(({ icon, label, link }, index) => (
      <LinkPage text={label} link={link} icon={icon} key={index} />
    ));
  }

  return (
    <Flex backdropFilter="auto" backdropBlur="8px" py={8}>
      <Container maxW="container.xl">
        <Flex
          gap={4}
          align="center"
          direction={["column-reverse", "column-reverse", "row"]}
          justify="space-between"
        >
          <Text>Desenvolvido com 💗 por Arthur Mendes Pereira</Text>

          <HStack>{getLinkButtons()}</HStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;
