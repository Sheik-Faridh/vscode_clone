export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    border-top: 1px solid ${mixins.contextMenu.divider};
    & .panel-header {
      display: flex;
      justify-content: space-between;
      & .MuiTabs-root {
        & button.MuiTab-root {
          font-size: 0.8rem;
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
        font-size: 1.25rem;
        & svg {
          color: ${mixins.icon.background.selected};
        }
      }
    }
    `;
};
