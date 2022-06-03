export default ({ ...props }) => {
  const { palette, mixins } = props.theme;
  return {
    '&.MuiTreeView-root': {
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    '& li.MuiTreeItem-root': {
      color: palette.grey[2],
      padding: '2px',
    },
    '& li.MuiTreeItem-root > div:hover': {
      backgroundColor: palette.grey[4],
    },
    '& li.MuiTreeItem-root > div.Mui-selected': {
      backgroundColor: mixins.contextMenu.hover,
      border: `1px solid ${palette.primary.main}`,
    },
    '& li.MuiTreeItem-root > div.Mui-selected > div.MuiTreeItem-label': {
      color: mixins.contextMenu.fontColor.primaryHover,
    },
    '& div.MuiTreeItem-label': {
      fontSize: '12px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    '& li.MuiTreeItem-root > div.Mui-selected > div.MuiTreeItem-iconContainer': {
      color: mixins.contextMenu.fontColor.primaryHover,
    },
  };
};
