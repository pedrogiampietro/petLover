import React from "react";

import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "./components/Loading";
import Routes from "./routes";

export function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          {fontLoaded ? (
            <>
              <Routes />
            </>
          ) : (
            <Loading color={theme.COLORS.PRIMARY} size="large" />
          )}
        </ThemeProvider>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
