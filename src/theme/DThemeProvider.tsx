import React from "react";
import { ThemeProvider } from "react-jss";
import { colors } from "./colors";

const theme = {
  colors,
};

export type ITheme = typeof theme;

const DThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DThemeProvider;
