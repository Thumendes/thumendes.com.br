import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: any) => ({
    body: {
      bg: mode(
        props.theme.colors.gray[200],
        props.theme.colors.gray[900]
      )(props),
    },
  }),
};
