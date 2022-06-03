export default ({ ...props }) => {
  const { mixins } = props.theme;
  return `
    ol.MuiBreadcrumbs-ol {
        height: 22px;
        padding: 0 10px;
        & li.MuiBreadcrumbs-li {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            & .MuiButton-root.MuiButton-text  {
              font-size: 13px;
              color: ${mixins.breadcrumb.color};
              text-transform: none;
              line-height: 1;
              min-width: 0;
              padding: 0;
            }
        }
        & li.MuiBreadcrumbs-separator {
          margin-left: 3px;
          margin-right: 3px;
          & svg {
            color: ${mixins.breadcrumb.iconColor};
            font-size: 18px;
          }
        }
    }
    `;
};

export const menuStyles = ({ ...props }) => {
  return {
    'ul.MuiList-root': {
      minWidth: '300px',
      maxHeight: '400px',
      overflowY: 'auto',
    },
  };
};
