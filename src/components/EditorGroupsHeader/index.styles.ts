export default ({ ...props }) => {
  const { mixins, shadows } = props.theme;
  return `
    &.MuiBox-root {
      display: flex;
      width: calc(100% + 3px);
      position: relative;
      right: 3px;
      justify-content: space-between;
      align-items: center;
      height: ${mixins.toolbar.minHeight};
      background: ${mixins.sidebar.background};
      box-shadow: ${shadows[2]};
      & div.MuiBox-root:nth-of-type(1) {
        flex: 1;
        height: 100%;
      }
      & div.MuiBox-root.icon-wrapper {
        display: flex;
        gap: 5px;
        padding-right: 12px;
        & .MuiButtonBase-root.MuiIconButton-root {
          & svg {
            color: ${mixins.icon.background.default};
            &:hover {
              color: ${mixins.icon.background.selected};
            }
          }
        }
      }
    }
  `;
};
