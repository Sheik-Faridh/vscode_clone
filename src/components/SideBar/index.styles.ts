export default ({ ...props }) => {
  const { mixins, palette } = props.theme;
  return `
    position: relative;
    height: 100%;
    width: 100%;
    background: ${mixins.sidebar.background};
    & .MuiModal-root.MuiDrawer-root {
        position: relative;
        width: 100%;
        height: 100%;
        background: ${mixins.sidebar.background};
        & .MuiBackdrop-root {
          display: none;
        }
        & .MuiPaper-root.MuiDrawer-paper {
          position: absolute;
          width: 100%;
          height: 100%;
          box-shadow: none;
          background: ${mixins.sidebar.background};
          & div.MuiBox-root.header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: ${mixins.toolbar.minHeight};
            padding: 0 10px;
            & span.MuiTypography-root {
              line-height: 1;
              text-transform: uppercase;
              color: ${palette.grey.A900};
            }
            & button.MuiButtonBase-root.MuiIconButton-root {
              color: ${palette.grey.A900};
              padding: 0;
            }
          }
        }
    }
  `;
};
