export default ({ ...props }) => {
  const { mixins, palette } = props.theme;
  return `
    display: flex;
    justify-content: space-between;
    background-color: ${mixins.activitybar.background};
    align-items: center;
    padding: 4px 12px;
    min-width: 330px;
    position: relative;
    bottom: 10px;
    & > .MuiTypography-root {
        color: ${palette.grey[2]};
        font-size: 13px;
        text-transform: uppercase;
    }
    & .MuiButtonBase-root > svg {
        color: ${mixins.icon.background.default};
        &:hover {
            color: ${mixins.icon.background.selected};
        }
    }
  `;
};
