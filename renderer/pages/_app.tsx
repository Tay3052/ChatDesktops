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
    <body className="background">
      <ThemeProvider theme={theme.palette}>
        <UIProvider colorModeManager={colorModeManager}>
          <ColorModeScript initialColorMode={defaultConfig.initialColorMode} />

          <Box>
            <Component {...pageProps} />
          </Box>
        </UIProvider>
      </ThemeProvider>
    </body>
  );
}

export default MyApp;
