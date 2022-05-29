export default ({ ...props }) => {
  const { palette } = props.theme;
  return {
    '&.MuiTreeView-root': {
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    '& li.MuiTreeItem-root': {
      color: palette.grey[2],
      padding: '2px',
    },
    '& div.MuiTreeItem-label': {
      fontSize: '14px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  };
};
