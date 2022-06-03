import { css, Global } from '@emotion/react';
import { ThemeOptions } from '@mui/material';

const GlobalStyle = (props: ThemeOptions) => (
  <Global
    {...props}
    styles={css`
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: rgba(121, 121, 121, 0.4);
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
      }
      div.menu-toolbar {
        z-index: 1;
      }
      div#notification-popper {
        z-index: 2;
      }
    `}
  />
);

export default GlobalStyle;
