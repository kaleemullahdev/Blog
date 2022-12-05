import React, { useState, createContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { lightModeTheme, darkModeTheme } from "../components";
const defaultContext = {
  darkMode: false,
  setDarkMode: (a: boolean) => {},
};

export interface Context {
  darkMode: boolean;
  setDarkMode: (a: boolean) => void;
}
export const AppContext = createContext(defaultContext);
export const AppProvider: React.FC<Context> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const theme = useMemo(
    () => ({
      type: darkMode ? "dark" : "light",
      ...(darkMode ? darkModeTheme : lightModeTheme),
    }),
    [darkMode]
  );
  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
