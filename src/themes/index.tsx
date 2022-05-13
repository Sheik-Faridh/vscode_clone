import React from 'react';
import { ThemeProvider, createTheme, ThemeOptions, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from 'themes/dark.theme.json';

type Props = {
  children: React.ReactNode;
};

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const theme = createTheme(darkTheme as ThemeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
