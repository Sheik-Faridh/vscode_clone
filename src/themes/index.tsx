import React from 'react';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from 'themes/dark.theme.json';
import GlobalStyle from './GlobalStyle';

type Props = {
  children: React.ReactNode;
};

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const theme = createTheme(darkTheme as ThemeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
