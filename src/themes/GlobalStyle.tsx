import { css, Global } from '@emotion/react';
import { Theme } from '@models';

type GlobalStylesProps = {
  mode: Theme;
};

const GlobalStyle = ({ mode }: GlobalStylesProps) => {
  return (
    <Global
      styles={css`
        @import url(${mode === 'light'
          ? 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.css'
          : 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-dark.css'});

        #root {
          width: 100vw;
          height: 100vh;
        }
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
};

export default GlobalStyle;
