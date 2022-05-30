export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
    & .MuiAccordion-root {
        & .MuiAccordionSummary-root {
            & .MuiAccordionSummary-content {
                & div.MuiBox-root {
                    padding-right: 5px;
                    & .MuiTypography-root {
                        font-weight: 500;
                        font-size: 13px;
                        text-transform: uppercase;
                        color: ${palette.common.white};
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    & .MuiTypography-root:nth-of-type(2) {
                        padding: 0 5px;
                        background-color: ${palette.grey[5]};
                        border-radius: 50%;
                    }
                }
            }
        }
        & .MuiAccordionDetails-root {
            height: calc(100vh - 271px);
            & > ul.MuiList-root {
                height: 100%;
                overflow-y: auto;
            }
        }
    }
    & li.MuiListItem-root {
        padding: 5px 10px;
        cursor: pointer;
        &:hover {
            background: #00000021;
        }
        & div.MuiListItemText-root {
            & .MuiTypography-root {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            & span.MuiListItemText-primary {
               font-size: 12px;
               color: ${palette.grey[1]};
               font-weight: 600;
            }
            & div.MuiBox-root.secondary-wrapper {
                & > p.MuiTypography-root {
                    font-size: 12px;
                    color: ${palette.grey[500]};
                }
                & > div.MuiBox-root {
                    display: flex;
                    justify-content: space-between;
                    & > button {
                        padding: 0;
                        text-transform: none;
                        min-width:0;
                        height:fit-content;
                        font-size: 12px;
                        &.MuiButton-root.MuiButton-text {
                            color: ${palette.grey[1]};
                            font-weight: 500;
                            & span.MuiButton-startIcon {
                                margin-left: 0;
                                margin-right: 2px;
                                & svg {
                                    color: ${palette.primary.main};
                                }
                            }
                        }
                        &.MuiButtonBase-root.MuiIconButton-root {
                            color: ${palette.grey[1]};
                            & > svg {
                                font-size: 19px;
                            }
                        }
                    }
                }
            }
        }
    }
    `;
};
