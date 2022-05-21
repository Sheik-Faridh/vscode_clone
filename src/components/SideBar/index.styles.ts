export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    height: 100%;
    width: 100%;
    background: ${mixins.sidebar.background};
  `;
};
