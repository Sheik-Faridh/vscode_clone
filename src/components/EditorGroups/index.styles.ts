export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    width: 100%;
    height: 100%;
    & div.MuiBox-root.editor-wrapper {
      width: 100%;
      height: calc(100% - ${mixins.editorForeHead.height} - 22px);
    }
  `;
};
