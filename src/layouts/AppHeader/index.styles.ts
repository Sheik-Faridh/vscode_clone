export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
    & .MuiToolbar-root.MuiToolbar-gutters {
      justify-content: space-between;
      & > .MuiBox-root {
        flex-basis: 100%;
        display: flex;
        gap: 15px;
        & > button.MuiButton-root.MuiButton-text {
          text-transform: capitalize;
          min-width: 0;
        }
        & > span.MuiTypography-root.MuiTypography-button {
          text-transform: capitalize;
        }
        &:nth-of-type(2){
          justify-content: center;
        }
        &:nth-of-type(3){
          justify-content: flex-end;
        }
        & button.MuiButtonBase-root.MuiIconButton-root {
          & > span.material-icons {
            color: ${palette.common.white};
          }
        }
      }
    }
  `;
};
