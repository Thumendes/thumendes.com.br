import { Box, Container } from "@chakra-ui/react";
import { NAVBAR_HEIGHT } from "theme/constants";
import Blur from "./Blur";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Links />
      <Header />
      <Blur posX={0.2} w={175} h={175} blur={150} color="#E400F5" posY={150} />
      <Blur posX={0.5} w={175} h={175} blur={150} color="#0800EB" posY={300} />
      <Blur posX={0.7} w={175} h={175} blur={150} color="#0CD1F7" posY={0} />
      <Container mt={NAVBAR_HEIGHT} maxW="container.xl">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
