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

                    & span .MuiButtonBase-root.MuiIconButton-root {
                        padding: 0;
                        margin-left: 10px;
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
                        & span .MuiButtonBase-root.MuiIconButton-root svg {
                            visibility: visible;
                        }
                    }
                }
            }
            & .MuiTabs-indicator {
                height: 0;
            }
        }
    `;
};
