export default ({ ...props }) => {
  const { mixins, palette } = props.theme;
  return `
      & div.MuiMenu-paper {
          background: ${mixins.contextMenu.background};
          & ul.MuiList-root {
              & li.MuiMenuItem-root {
                padding-top: 3px;
                padding-bottom: 3px;
                & .MuiListItemIcon-root {
                    min-width: 16px;
                }
                & .MuiListItemText-root {
                    min-width: 270px;
                    & span.MuiTypography-root.MuiTypography-body1 {
                        font-size: 13px;
                        color: ${mixins.contextMenu.fontColor.primary};
                    }
                }
                & span.MuiTypography-caption  {
                    color: ${mixins.contextMenu.fontColor.secondary};
                }
                &:hover {
                    background: ${mixins.contextMenu.hover};
                    & .MuiListItemText-root span.MuiTypography-root.MuiTypography-body1 {
                        color: ${mixins.contextMenu.fontColor.primaryHover};
                    }
                    & span.MuiTypography-caption  {
                        color: ${mixins.contextMenu.fontColor.secondaryHover};
                    }
                }
              }
              & hr.MuiDivider-root {
                margin: 8px 10px;
                border-color: ${palette.divider};
              }
          }
      }
      `;
};
