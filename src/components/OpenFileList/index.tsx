import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { VscClose } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import FileIcon from '@components/FileIcon';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { EditorStore, FileExplorerStore } from '@store';
import { FileData } from '@models';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const OpenFileList = () => {
  const [openFiles, setOpenfiles] = useState<Partial<FileData>[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const store = EditorStore.subject.subscribe((v) => {
      const { files } = FileExplorerStore.state;
      const openFileIdList = v.openFiles;
      const filterList = openFileIdList.map((id) => files.find((f) => f.sha === id));
      setOpenfiles(filterList);
      setActive(v.active);
    });
    return () => store.unsubscribe();
  }, []);

  const handleClick = (id: string) => () => {
    EditorStore.closeFile(id);
  };

  return (
    <Container>
      <Tabs value={active}>
        {openFiles.map((f) => (
          <Tab
            key={f.sha}
            value={f.sha}
            label={
              <span>
                {f.name}
                {/* <IconButton size="small" onClick={handleClick(f.sha)}>
                  <VscClose />
                </IconButton> */}
              </span>
            }
            icon={<FileIcon name={f.name} />}
            iconPosition="start"
          />
        ))}
      </Tabs>
    </Container>
  );
};

export default OpenFileList;
