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
    & .panel-content {
      width: 100%;
      height: calc(100% - 48px);
      padding-bottom: 15px;
      
      & #terminal {
        height: 100%;

        & .xterm {
          height: 100%;
          padding-left: 20px;

          & .xterm-viewport {
            overflow-y: auto;
          }
        }
      }
    }
    `;
};
