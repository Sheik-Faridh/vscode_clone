export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    &.topDialogContainer > div.MuiDialog-container  {
        align-items: flex-start;
        position: relative;
        top: ${mixins.toolbar.minHeight};
        & div.MuiPaper-root {
            margin: 0;
            max-width: 700px;
            width: 100%;
            background: ${mixins.sidebar.background};
        }
    }
    &.errorDialogContainer {
        & .MuiDialogTitle-root {
            color: ${mixins.contextMenu.fontColor.primary};
        }
        & .MuiDialogContentText-root {
            color: ${mixins.contextMenu.fontColor.secondary};
        }
    }
    `;
};
