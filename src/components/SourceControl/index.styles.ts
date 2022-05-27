export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
    & > div.MuiBox-root:last-child {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
        & p.MuiTypography-root {
            color: ${palette.grey.A900};
            font-size: 12px;
        }
        & button.MuiButton-root {
            text-transform: capitalize;
        }
    } 
    `;
};
