import { styled } from '@mui/material/styles';
import { VscNewFile, VscSaveAll, VscCloseAll, VscEditorLayout, VscClose } from 'react-icons/vsc';
import Accordion from '@atoms/Accordion';
import Box from '@mui/material/Box';
import FileIcon from '@components/FileIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useExplorerAccordion, useOpenEditor } from '@hooks';
import { EditorStore } from '@store';
import { ExplorerActivity } from '@models';
import listStyles from './index.styles';

const ListStyled = styled(List)`
  ${listStyles}
`;

const OpenFilesList = () => {
  const { openFiles, files, handleClose, handleActive } = useOpenEditor();

  return openFiles.length ? (
    <ListStyled>
      {openFiles.map((sha) => {
        const file = files.find((f) => f.sha === sha);
        return (
          <ListItem
            key={sha}
            secondaryAction={<Typography variant="caption">{file.path}</Typography>}
            onClick={handleActive(sha)}
          >
            <ListItemIcon>
              <VscClose onClick={handleClose(sha)} />
              <FileIcon name={file.name} />
            </ListItemIcon>
            <ListItemText>{file.name}</ListItemText>
          </ListItem>
        );
      })}
    </ListStyled>
  ) : (
    <Box className="not-found-info-wrapper">
      <Typography variant="body2">There is no open files</Typography>
    </Box>
  );
};

const OpenEditors = () => {
  const { accordionHeight, handleChange } = useExplorerAccordion(ExplorerActivity.open_editors);

  const handleCloseAll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    EditorStore.closeAllFiles();
  };

  return (
    <Accordion onChange={handleChange}>
      <Accordion.Summary>
        <Typography variant="body2">Open Editors</Typography>
        <Box>
          <Tooltip title="New Untitled File" placement="bottom">
            <IconButton size="small">
              <VscNewFile />
            </IconButton>
          </Tooltip>
          <Tooltip title="Toggle Vertical/Horizontal Layout" placement="bottom">
            <IconButton size="small">
              <VscEditorLayout />
            </IconButton>
          </Tooltip>
          <Tooltip title="Save All" placement="bottom">
            <IconButton size="small">
              <VscSaveAll />
            </IconButton>
          </Tooltip>
          <Tooltip title="Close All" placement="bottom">
            <IconButton size="small" onClick={handleCloseAll}>
              <VscCloseAll />
            </IconButton>
          </Tooltip>
        </Box>
      </Accordion.Summary>
      <Accordion.Details sx={{ height: accordionHeight }}>
        <OpenFilesList />
      </Accordion.Details>
    </Accordion>
  );
};

export default OpenEditors;
