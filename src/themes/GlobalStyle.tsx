import { css, Global } from '@emotion/react';
import { ThemeOptions } from '@mui/material';

const GlobalStyle = (props: ThemeOptions) => (
  <Global
    {...props}
    styles={css`
      div.menu-toolbar {
        z-index: 1;
      }
    `}
  />
);

export default GlobalStyle;
