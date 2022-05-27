export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
      & div.MuiMenu-paper {
          background: ${mixins.contextMenu.background};
          & ul.MuiList-root {
              & li.MuiMenuItem-root {
                  &:hover {
                      background: ${mixins.contextMenu.hover};
                  }
                  & .MuiListItemIcon-root {
                      min-width: 16px;
                  }
                  & .MuiListItemText-root {
                      color: ${mixins.contextMenu.fontColor.primary};
                      min-width: 270px;
                      & span.MuiTypography-root.MuiTypography-body1 {
                        font-size: 12px;
                      }
                  }
                  & span.MuiTypography-caption  {
                      color: ${mixins.contextMenu.fontColor.secondary};
                  }
              }
              & hr.MuiDivider-root {
                  margin: 8px 10px;
                  border-color: ${mixins.contextMenu.divider};
              }
          }
      }
      `;
};
