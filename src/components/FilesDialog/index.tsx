import { useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Dialog from '@atoms/Dialog';
import FileIcon from '@components/FileIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@atoms/TextField';
import Typography from '@mui/material/Typography';
import { useSearch } from '@hooks';
import { DialogStore, EditorStore, FileExplorerStore } from '@store';
import { FileData } from '@models';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const FileDialog = () => {
  const [files, setFiles] = useState<Partial<FileData>[]>([]);
  const [active, setActive] = useState('');
  const { search, handleChange } = useSearch();

  const handleClose = () => {
    DialogStore.close();
  };

  const handleClick = (id: string) => () => {
    EditorStore.openFile(id);
    handleClose();
  };

  useEffect(() => {
    const fileExplorerStore = FileExplorerStore.subject.subscribe((v) => {
      const blobTypeFiles = v.files.filter((f) => f.type === 'blob');
      setFiles(blobTypeFiles);
    });

    const editorStore = EditorStore.subject.subscribe((v) => setActive(v.active));

    return () => {
      fileExplorerStore.unsubscribe();
      editorStore.unsubscribe();
    };
  }, []);

  const filteredFiles = useMemo(
    () => (search ? files.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())) : files),
    [files, search],
  );

  return (
    <Dialog open maxWidth="md" hideBackdrop onClose={handleClose} className="topDialogContainer">
      <Container>
        <TextField fullWidth placeholder="search files by name" onChange={handleChange} autoFocus />
        <List>
          {filteredFiles.map((f) => (
            <ListItem key={f.sha} selected={f.sha === active} onClick={handleClick(f.sha)}>
              <ListItemIcon>
                <FileIcon name={f.name} />
              </ListItemIcon>
              <ListItemText>{f.name}</ListItemText>
              <Typography variant="body2">~/{f.path}</Typography>
            </ListItem>
          ))}
          {!!!filteredFiles.length && (
            <ListItem selected onClick={handleClose}>
              <ListItemText>No Matching Results</ListItemText>
            </ListItem>
          )}
        </List>
      </Container>
    </Dialog>
  );
};

export default FileDialog;
