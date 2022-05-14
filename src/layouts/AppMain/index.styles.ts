export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    display: flex;
    height: calc(100vh - ${mixins.toolbar.minHeight} - ${mixins.footer.height});
    & main.MuiPaper-root {
      width: calc(100% - ${mixins.activitybar.width});
      height: 100%;
      box-shadow: none;
      & .custom-gutter-horizontal {
        padding: 0 1.5px;
        &:hover {
          background-color: ${mixins.toolbar.background};
        }
        & > .__dbk__dragger.Dark {
          width: 1.5px;
          background: transparent;
        }
      }
    }
  `;
};
