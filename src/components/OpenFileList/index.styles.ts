export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
        & .MuiTabs-root {
            height: 100%;
            min-height: ${mixins.editorForeHead.height};
            & .MuiTabs-flexContainer {
                & button.MuiTab-root {
                    gap: 5px;
                    color: ${mixins.editorForeHead.color};
                    min-height: ${mixins.editorForeHead.height};
                    font-size: 12px;
                    text-transform: none;
                    line-height: 1;
                    padding: 8px 16px;
                    font-weight: 400;
                    font-style: italic;
                    
                    & > svg {
                        font-size: 19px;
                    }

                    & span.MuiTab-iconWrapper {
                        display: grid;
                        place-items: center;
                        padding: 1px;
                        border-radius: 4px;
                        margin: 0;
                        &:hover {
                            background: ${mixins.editorForeHead.iconBg};
                        }
                        & svg {
                            visibility: hidden;
                            color: ${mixins.editorForeHead.iconColor};
                            font-size: 17px;
                        }
                    }

                    &.Mui-selected {
                        color: ${mixins.editorForeHead.active};
                        background: ${mixins.editorForeHead.background};
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
                color: ${mixins.editorForeHead.color};
            }
            & .MuiTabs-indicator {
                height: 0;
            }
        }
    `;
};
