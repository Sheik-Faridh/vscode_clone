export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;
    width: ${mixins.activitybar.width};
    background: ${mixins.activitybar.background};
    & div.MuiBox-root {
      & ul.MuiList-root {
        padding: 0;
        & li.MuiListItem-root {
          padding: 16px 12px;
          justify-content: center;
          & div.MuiListItemIcon-root {
            justify-content: center;
            & > svg {
              color: ${mixins.icon.background.default};
              font-size: 24px;
            }
          }
          &.Mui-selected {
            border-left: 2px solid ${mixins.icon.background.default};
            background-color: transparent;
          }
          &:hover {
            & div.MuiListItemIcon-root > svg {
              color: ${mixins.icon.background.selected};
            }
          }
        }
      }
    }
  `;
};
