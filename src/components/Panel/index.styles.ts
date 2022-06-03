export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    height: 100%;
    & .panel-header {
      display: flex;
      justify-content: space-between;
      & .MuiTabs-root {
        & button.MuiTab-root {
          background: inherit;
          font-size: 12px;
          color: ${mixins.panel.tab.fontColor};
          &.Mui-selected {
            color: ${mixins.panel.tab.selected};
          }
        }
        & span.MuiTabs-indicator {
          background: ${mixins.panel.tab.active};
        }
      }
      & button.MuiButtonBase-root.MuiIconButton-root {
        background: inherit;
        font-size: 1.25rem;
        & svg {
          color: ${mixins.panel.iconColor};
        }
      }
    }
    `;
};
