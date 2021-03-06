export default ({ ...props }) => {
  const { mixins, palette } = props.theme;
  return `
    display: flex;
    height: calc(100vh - ${mixins.toolbar.minHeight} - ${mixins.footer.height});
    & > div.MuiPaper-root {
      width: calc(100% - ${mixins.activitybar.width});
      height: 100%;
      box-shadow: none;
      & .custom-gutter-horizontal {
        z-index: 1;
        padding: 0 1px;
        &:hover {
          background-color: ${palette.primary.main};
        }
        & > .__dbk__dragger.Dark {
          width: 1px;
          background: transparent;
        }
      }
      & .custom-gutter-vertical {
        z-index: 1;
        height: 2px;
        padding: 0;
        background: ${palette.divider};
        &.transparent {
          background: transparent;
        }
        &:hover{
          background-color: ${palette.primary.main};
        }
        & > .__dbk__dragger.Dark {
          background: transparent;
        }
      }
      & .Vertical .__dbk__child-wrapper {
        &:first-of-type {
          max-height: calc(100% - 2px);
        }
        &:last-child {
          z-index: 1;
        }
        & > div.MuiPaper-root > svg {
          width: 30%;
          height: 30%;
        }
      }
    }
  `;
};
