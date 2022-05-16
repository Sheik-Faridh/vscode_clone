export default ({ ...props }) => {
  const { mixins, palette } = props.theme;
  return `
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
    `;
};
