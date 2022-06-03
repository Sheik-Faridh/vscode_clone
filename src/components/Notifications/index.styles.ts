export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    display: flex;
    justify-content: space-between;
    background-color: ${mixins.notification.background};
    align-items: center;
    padding: 4px 12px;
    min-width: 330px;
    position: relative;
    bottom: 10px;
    & > .MuiTypography-root {
      color: ${mixins.notification.color};
      font-size: 13px;
      text-transform: uppercase;
    }
    & .MuiButtonBase-root {
      &:hover {
        color: ${mixins.notification.hoverBg};
      }
      & svg {
        color: ${mixins.notification.color}; 
      }
    } 
  `;
};
