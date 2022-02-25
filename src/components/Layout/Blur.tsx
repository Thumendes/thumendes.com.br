import { Box, Center } from "@chakra-ui/react";
import { useWindowSize } from "hooks/useWindowSize";
import React from "react";
import { theme } from "theme";

interface BlurProps {
  color?: string;
  w?: number;
  h?: number;
  posY: number;
  posX: number;
  blur?: number;
}

const DEFAULT_COLOR: BlurProps["color"] = "#0ff";
const DEFAULT_W: BlurProps["w"] = 100;
const DEFAULT_H: BlurProps["h"] = 100;
const DEFAULT_BLUR: BlurProps["blur"] = 100;

const Blur: React.FC<BlurProps> = ({
  blur = DEFAULT_BLUR,
  color = DEFAULT_COLOR,
  h = DEFAULT_H,
  w = DEFAULT_W,
  posX,
  posY,
}) => {
  const size = useWindowSize();
  if (posX > 1 || posX < 0) throw new Error("posX must be between 0 and 1");

  return (
    <Center
      overflow="hidden"
      position="fixed"
      zIndex="-999"
      top={posY}
      left={size?.width * posX}
      filter="auto"
      blur={`${blur}px`}
      h={h + blur}
      w={w + blur}
    >
      <Box zIndex="-9999" bg={color} h={h} w={w} borderRadius="100%" />
    </Center>
  );
};

export default Blur;
