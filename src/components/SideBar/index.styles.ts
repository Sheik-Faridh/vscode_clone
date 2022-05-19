export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    position: relative;
    height: 100%;
    width: 100%;
    background: ${mixins.sidebar.background};
  `;
};
