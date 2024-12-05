import React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import {
  UIProvider,
  colorModeManager,
  createColorModeManager,
} from "@yamada-ui/react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@yamada-ui/react";
import { ColorModeScript, defaultConfig } from "@yamada-ui/react";
import Header from "./components/header";

const theme = {
  palette: {
    primary: {
      main: "#1e90ff",
    },
    secondary: {
      main: "#fa8072",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const { cookies } = pageProps;
  const colorModeManager = createColorModeManager("ssr", cookies);
  return (
    <ThemeProvider theme={theme}>
      <UIProvider colorModeManager={colorModeManager}>
        <ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
        <Box as={"header"}>
          <Header />
        </Box>
        <Box as={"main"}>
          <Component {...pageProps} />
        </Box>
      </UIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
