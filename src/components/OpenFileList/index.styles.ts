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

                    & span.MuiTab-iconWrapper {
                        display: grid;
                        place-items: center;
                        padding: 1px;
                        border-radius: 4px;
                        margin: 0;
                        &:hover {
                            background: ${palette.grey[600]};
                        }
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
                        & span.MuiTab-iconWrapper svg {
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