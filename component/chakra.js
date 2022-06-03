import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  vs_blue: {
    300: "#569ACF",
    100: "#9CDCFE",
  },

  vs_orange: "#CE9178",
  vs_purple: "#ED4278",
  vs_yellow: "#FFD700",

  secondary: "rgba(0,0,0,0.3)",
  white: "#fff",
};

const styles = {
  global: () => ({
    body: {
      bgGradient:
        "linear-gradient(346deg, rgba(30,30,30,1) 0%, rgba(62,35,62,0.2) 100%)",

      backgroundAttachment: "fixed",
    },
    ".cm-line": {
      p: 2,
    },
    ".lw": {
      float: "left",
    },
    ".lb": {
      color: "vs_blue.300",
    },
    ".lg": {
      color: "vs_blue.100",
    },
    ".ll": {
      color: "vs_blue.100",
      pl: 6,
      float: "left",
      w: 130,
    },
    ".le": {
      color: "vs_orange",
    },
    ".la": {
      color: "vs_purple",
    },
    ".lk": {
      color: "vs_yellow",
    },
  }),
};

const components = {
  Alert: {
    defaultProps: {
      // Then here we set the base variant as the default
      variant: "base",
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config, colors, styles, components });

export default theme;
