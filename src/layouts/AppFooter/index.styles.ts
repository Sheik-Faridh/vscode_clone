export default ({ ...props }) => {
  const { palette, mixins } = props.theme;
  const { footer } = mixins;
  return `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${footer.height};
    background-color: ${footer.background};
    padding: 0 15px;
    & > div.MuiBox-root {
      display: flex;
      align-items: center;
      gap: 20px;
      height: 100%;
      & button.MuiButton-root.MuiButton-text,
      & button.MuiButtonBase-root.MuiIconButton-root {
        height: 100%;
        padding: 0;
        min-width: 0;
        color: ${palette.common.white};
        text-transform: none;
        & span.MuiButton-startIcon {
          margin-right: 2px;
        }
      }
      & button.MuiButton-root.MuiButton-text {
        font-size: 12px;
      }
      & .MuiButtonGroup-root {
        & button.MuiButton-root.MuiButton-text:nth-of-type(1) {
          padding-right: 0;
        }
        & button.MuiButton-root.MuiButton-text:not(:nth-of-type(1)) {
          padding-left: 5px;
        }
      }
    }
  `;
};
