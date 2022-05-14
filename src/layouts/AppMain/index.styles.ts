export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    height: calc(100vh - ${mixins.toolbar.minHeight} - ${mixins.footer.height});
  `;
};
