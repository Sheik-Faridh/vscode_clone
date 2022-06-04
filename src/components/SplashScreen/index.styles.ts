export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${mixins.splashScreen.background};
    & div.MuiBox-root {
      width: 250px;
      height: 250px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & p.MuiTypography-root {
      font-size: 24px;
      color: ${mixins.contextMenu.fontColor.primary};
      text-transform: capitalize;
      font-weight: 600;
    }
      `;
};
