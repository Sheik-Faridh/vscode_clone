export default ({ ...props }) => {
  const { palette, mixins } = props.theme;
  return `
    & div.MuiBox-root.header {
        & > div.MuiBox-root {
            display: flex;
            gap: 10px;
        }
    }
    & div.MuiBox-root.fields-wrapper {
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
        & > div.MuiBox-root {
            display: flex;
            & .MuiOutlinedInput-root {
                flex-grow: 1;
            }
            & button.MuiButtonBase-root.MuiIconButton-root svg { 
                color: ${palette.grey[2]};
            }
        }
    }
    & div.MuiFormControl-root label {
        position: static;
        color: ${palette.grey[2]};
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
                color: ${palette.grey[2]};
                height: 20px;
            }
        }
    }
    & div.wrapper {
        display: flex;
        align-items: stretch;
        padding: 0 10px 0 5px;
        gap: 5px;
        & > button.MuiButtonBase-root.MuiIconButton-root {
            padding: 0;
            color: ${mixins.panel.iconColor};
            border-radius: 0;
            &:hover {
                background: ${palette.grey[4]};
            }
            &:focus {
                border: 1px solid ${palette.primary.main};
            }
        }
        & div.MuiBox-root.fields-wrapper {
            padding: 0;
            &:last-child {
                top: 0;
            }
        }
    }
    `;
};
