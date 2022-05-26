export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    &.MuiOutlinedInput-root {
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
            border-radius: 0;
        }
    }
    `;
};
