import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { VscClose } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import FileIcon from '@components/FileIcon';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { EditorStore, FileExplorerStore, StatusBarStore } from '@store';
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

  const handleClose = (id: string) => (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    EditorStore.closeFile(id);
    StatusBarStore.reset();
  };

  const handleActive = (id: string) => () => {
    EditorStore.setActive(id);
  };

  return (
    <Container>
      <Tabs value={active} variant="scrollable" scrollButtons="auto">
        {openFiles.map((f) => (
          <Tab
            key={f.sha}
            value={f.sha}
            onClick={handleActive(f.sha)}
            label={
              <>
                <FileIcon name={f.name} />
                {f.name}
              </>
            }
            icon={
              <span onClick={handleClose(f.sha)}>
                <VscClose />
              </span>
            }
            iconPosition="end"
          />
        ))}
      </Tabs>
    </Container>
  );
};

export default OpenFileList;
