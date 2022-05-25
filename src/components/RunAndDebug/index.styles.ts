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
              font-size: 0.85rem;
          }
          & button.MuiButton-root {
              text-transform: none;
          }
          & a.MuiLink-root {
              font-size: 0.85rem;
          }
      } 
      `;
};