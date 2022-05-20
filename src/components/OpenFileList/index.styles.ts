export default ({ ...props }) => {
  const { mixins, palette } = props.theme;
  return `
        & .MuiTabs-root {
            height: 100%;
            min-height: ${mixins.toolbar.minHeight};
            & .MuiTabs-flexContainer {
                & button.MuiTab-root {
                    gap: 5px;
                    color: #696868;
                    min-height: ${mixins.toolbar.minHeight};
                    font-size: 0.9rem;
                    text-transform: none;
                    line-height: 1;
                    padding: 8px 16px;

                    & .MuiButtonBase-root.MuiIconButton-root {
                        padding: 1px;
                        border-radius: 1px;
                        margin: 0;
                        & svg {
                            visibility: hidden;
                            color: ${palette.grey[100]};
                        }
                    }

                    &.Mui-selected {
                        color: ${palette.common.white};
                        background: ${palette.background.default};
                    }

                    &:hover,
                    &:focus {
                        & .MuiButtonBase-root.MuiIconButton-root svg {
                            visibility: visible;
                        }
                    }
                }
            }
            & .MuiTabScrollButton-root {
                color: ${palette.grey[100]};
            }
            & .MuiTabs-indicator {
                height: 0;
            }
        }
    `;
};
