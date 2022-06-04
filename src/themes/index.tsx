import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeStore } from '@store';
import darkTheme from '@themes/dark.theme.json';
import lightTheme from '@themes/light.theme.json';
import { Props, Theme } from '@models';
import GlobalStyle from './GlobalStyle';

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<Theme>(ThemeStore.state.mode);
  const theme = useMemo(() => {
    const themeJSON = mode === 'dark' ? darkTheme : lightTheme;
    return createTheme(themeJSON as ThemeOptions);
  }, [mode]);

  useEffect(() => {
    const store = ThemeStore.subject.subscribe((v) => {
      setMode(v.mode);
    });

    return () => store.unsubscribe();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle mode={mode} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
