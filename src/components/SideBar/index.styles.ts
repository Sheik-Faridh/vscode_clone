export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    position: relative;
    height: 100%;
    width: 100%;
    background: ${mixins.sidebar.background};
    & .MuiModal-root.MuiDrawer-root {
      position: relative;
      width: 100%;
      height: 100%;
      background: ${mixins.sidebar.background};
      & .MuiBackdrop-root {
        display: none;
      }
      & .MuiPaper-root.MuiDrawer-paper {
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: none;
        background: ${mixins.sidebar.background};
      }
    }
  `;
};
