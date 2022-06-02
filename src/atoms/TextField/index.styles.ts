export default ({ ...props }) => {
  const { mixins, palette } = props.theme;
  return `
    &.MuiOutlinedInput-root {
        border-radius: 0;
        padding-right: 3px;
        background-color: ${mixins.textField.background};
        & input.MuiOutlinedInput-input  {
            padding: 6px 8px;
            font-size: 13px;
            color: ${mixins.textField.color};
            &::placeholder {
                color: ${mixins.textField.color};
            }
        }
        & .MuiInputAdornment-root svg {
            color: ${mixins.textField.color};
        }
        & fieldset.MuiOutlinedInput-notchedOutline {
            border-color: transparent;
        }
        &.Mui-focused {
            border: 1px solid ${palette.primary.main};
        }
    }
    `;
};
