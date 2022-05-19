import React, { useState, useEffect, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box/Box';
import FileIcon from '@components/FileIcon';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import { FileExplorerStore, EditorStore } from '@store';
import { FileData, FileType } from '@models';
import treeViewStyles from './index.styles';
import { sortTreeView } from '@utils/helper';
import { Typography } from '@mui/material';

const TreeViewRoot = styled(TreeView)`
  ${treeViewStyles}
`;

const FolderTree = () => {
  const [filesList, setfilesList] = useState<Partial<FileData>[]>([]);

  useEffect(() => {
    const store = FileExplorerStore.subject.subscribe((v) => {
      setfilesList(v.files);
    });

    return () => store.unsubscribe();
  }, []);

  const rootList = useMemo(() => sortTreeView(filesList.filter((file) => !file.parent)), [filesList]);

  const handleClick = (id: string, type: FileType) => () => {
    type === 'blob' && EditorStore.openFile(id);
  };

  const renderItemLabel = ({ type, name }: Pick<FileData, 'name' | 'type'>) =>
    type === 'blob' ? <FileIcon name={name} /> : '';

  const renderTree = ({ sha, name, type }: Pick<FileData, 'sha' | 'name' | 'type'>) => (
    <TreeItem
      key={sha}
      nodeId={sha}
      label={name}
      onClick={handleClick(sha, type)}
      icon={renderItemLabel({ type, name })}
    >
      {sortTreeView(filesList.filter((f) => f.parent === sha)).map(renderTree)}
    </TreeItem>
  );

  return (
    <TreeViewRoot defaultCollapseIcon={<VscChevronDown />} defaultExpandIcon={<VscChevronRight />} multiSelect>
      {rootList.map(renderTree)}
    </TreeViewRoot>
  );
};

export default FolderTree;
