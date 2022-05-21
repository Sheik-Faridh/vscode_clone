export default ({ ...props }) => {
  const { palette } = props.theme;
  return {
    '&.MuiTreeView-root': {
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    '& li.MuiTreeItem-root': {
      color: palette.grey.A900,
      padding: '2px',
    },
    '& div.MuiTreeItem-label': {
      fontSize: '0.9rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  };
};