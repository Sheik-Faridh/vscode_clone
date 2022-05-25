export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
    & div.MuiBox-root.header {
        & > div.MuiBox-root {
            display: flex;
            gap: 5px;
        }
    }
    & div.MuiBox-root.wrapper {
        display: flex;
        gap: 10px;
        flex-direction: column;
        padding: 10px 10px 0;
        &:last-child {
            width: 100%;
            padding-top: 0;
            position: relative;
            top: -20px;
        }
        & .MuiOutlinedInput-root {
            padding-right: 3px;
            & input.MuiOutlinedInput-input  {
                padding: 6px 8px;
                font-size: 13px;
                color: ${palette.grey.A900};
                &::placeholder {
                    color: ${palette.grey.A900};
                }
            }
            & .MuiInputAdornment-root svg {
                color: ${palette.grey.A900};
            }
            & fieldset.MuiOutlinedInput-notchedOutline {
                border-color: ${palette.grey.A900};
                border-radius: 0;
            }
        }
        & > div.MuiBox-root {
            display: flex;
            & .MuiOutlinedInput-root {
                flex-grow: 1;
            }
            & button.MuiButtonBase-root.MuiIconButton-root svg { 
                color: ${palette.grey.A900};
            }
        }
    }
    & div.MuiFormControl-root label {
        position: static;
        color: ${palette.grey.A900};
        transform: none;
        font-size: 11px;
    }
    & div.MuiBox-root.toggle-wrapper {
        display: inline-flex;
        width: 100%;
        justify-content: flex-end;
        & button.MuiButtonBase-root.MuiIconButton-root {
            padding: 0 10px;
            z-index: 10;
            & svg {
                color: ${palette.grey.A900};
                height: 20px;
            }
        }
    }
    `;
};