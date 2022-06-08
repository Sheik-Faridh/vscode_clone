export default ({ ...props }) => {
  const { palette, mixins } = props.theme;
  return `
      &.MuiList-root {
        & li.MuiListItem-root {
            padding: 1px 10px;
            gap: 10px;
            cursor: pointer;
            & div.MuiListItemIcon-root {
                align-items: center;
                gap: 15px;
                & > svg:first-of-type {
                    color: ${palette.grey[1]};
                    width: 20px;
                    height: 20px;
                    visibility: hidden;
                }
                & > svg:last-child {
                    width: 16px;
                    height: 16px;
                }
            }
            & div.MuiListItemText-root {
                flex: inherit;
                min-width: fit-content;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: ${palette.grey[2]};
                & span.MuiTypography-root {
                    font-size: 13px;
                }
            }
            & div.MuiListItemSecondaryAction-root {
                position: static;
                transform: none;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: ${mixins.contextMenu.fontColor.secondary};
                & span.MuiTypography-root {
                    font-size: 13px;
                    font-style: italic;
                }
            }
            &:hover {
                background-color: ${palette.grey[4]};
                & div.MuiListItemIcon-root {
                    & > svg:first-of-type {
                        visibility: visible;
                        color: ${mixins.editorForeHead.iconColor};
                    }
                }
            }
        }
      }
      `;
};
