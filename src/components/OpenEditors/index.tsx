import { useEffect, useState } from 'react';
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
import { EditorStore, FileExplorerStore, StatusBarStore } from '@store';
import { FileData } from '@models';
import listStyles from './index.styles';

const ListStyled = styled(List)`
  ${listStyles}
`;

const OpenFilesList = () => {
  const [openFiles, setOpenFiles] = useState<string[]>([]);
  const [files, setFiles] = useState<Partial<FileData>[]>([]);

  useEffect(() => {
    const editorStore = EditorStore.subject.subscribe((v) => {
      setOpenFiles(v.openFiles);
    });

    const fileExplorerStore = FileExplorerStore.subject.subscribe((v) => {
      setFiles(v.files);
    });

    return () => {
      fileExplorerStore.unsubscribe();
      editorStore.unsubscribe();
    };
  }, []);

  const handleClose = (id: string) => (event: React.MouseEvent<HTMLOrSVGElement>) => {
    event.stopPropagation();
    EditorStore.closeFile(id);
    StatusBarStore.reset();
  };

  const handleActive = (id: string) => () => {
    EditorStore.setActive(id);
  };

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
  return (
    <Accordion>
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
            <IconButton size="small">
              <VscCloseAll />
            </IconButton>
          </Tooltip>
        </Box>
      </Accordion.Summary>
      <Accordion.Details>
        <OpenFilesList />
      </Accordion.Details>
    </Accordion>
  );
};

export default OpenEditors;
