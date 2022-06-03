export default ({ ...props }) => {
  const { palette, mixins } = props.theme;
  return ` 
    padding: 10px 0;
    width: 100%;
    overflow-x: hidden;
    & div.MuiOutlinedInput-root {
        width: calc(100% - 16px);
        margin: 0 8px;
    }
    & ul.MuiList-root  {
        padding: 0;
        width: 100%;
        margin-top: 10px;
        max-height: 40vh;
        overflow-y: auto;
        overflow-x: hidden;
        & > li.MuiListItem-root {
            padding: 2px 0 2px 10px;
            gap: 10px;
            cursor: pointer;
            & div.MuiListItemIcon-root {
                min-width: 0;
            }
            & div.MuiListItemText-root {
                flex: none;
                color: ${palette.grey[2]};
                & span.MuiTypography-root {
                    font-size: 12px;
                }
            }
            & > p.MuiTypography-root {
                font-style: italic;
                color: ${mixins.contextMenu.fontColor.secondary};
            }
            &:hover {
                background-color: ${palette.grey[4]};
            }
            &.Mui-selected {
                background-color: ${mixins.contextMenu.hover};
                & div.MuiListItemText-root {
                    color: ${mixins.contextMenu.fontColor.primaryHover};
                }
                & > p.MuiTypography-root {
                    color: ${mixins.contextMenu.fontColor.secondaryHover};
                }
            }
        }
    }
    `;
};
