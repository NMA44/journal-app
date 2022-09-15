import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { purpleTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
