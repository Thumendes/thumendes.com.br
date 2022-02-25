import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { styles } from "theme/styles";
import { components } from "theme/components";
import { fonts } from "theme/fonts";
import { colors } from "theme/colors";

const overrides = { fonts, styles, colors, components };

export const theme = extendTheme(
  overrides,
  withDefaultColorScheme({ colorScheme: "cyan" })
);
