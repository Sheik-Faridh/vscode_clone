export default ({ ...props }) => {
  const { palette, mixins } = props.theme;
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
                color: ${palette.grey[1]};
                text-transform: none;
                line-height: 1;
                min-width: 0;
                padding: 0;
            }
        }
        & li.MuiBreadcrumbs-separator svg {
            color: ${mixins.icon.background.default};
        }
    }
    `;
};
