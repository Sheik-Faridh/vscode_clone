import {
  useState,
  useEffect,
  useMemo,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  SyntheticEvent,
} from 'react';
import { styled } from '@mui/material/styles';
import FileIcon from '@components/FileIcon';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import { FileExplorerStore, EditorStore } from '@store';
import { FileData, FileType } from '@models';
import treeViewStyles from './index.styles';
import { sortTreeView } from '@utils/helper';

const TreeViewRoot = styled(TreeView)`
  ${treeViewStyles}
`;

type FolderTreeHandle = {
  collapseAll: () => void;
};

const FolderTree: ForwardRefRenderFunction<FolderTreeHandle> = (props, ref) => {
  const [filesList, setFilesList] = useState<Partial<FileData>[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  useEffect(() => {
    const store = FileExplorerStore.subject.subscribe((v) => {
      setFilesList(v.files);
    });

    return () => store.unsubscribe();
  }, []);

  const rootList = useMemo(() => sortTreeView(filesList.filter((file) => !file.parent)), [filesList]);

  const handleClick = (id: string, type: FileType) => () => {
    type === 'blob' && EditorStore.openFile(id);
  };

  const renderItemLabel = ({ type, name }: Pick<FileData, 'name' | 'type'>) =>
    type === 'blob' ? <FileIcon name={name} /> : '';

  const renderTree = ({ sha, name, type, path }: Pick<FileData, 'sha' | 'name' | 'type' | 'path'>) => (
    <TreeItem
      title={path}
      key={sha}
      nodeId={sha}
      label={name}
      onClick={handleClick(sha, type)}
      icon={renderItemLabel({ type, name })}
    >
      {sortTreeView(filesList.filter((f) => f.parent === sha)).map(renderTree)}
    </TreeItem>
  );

  useImperativeHandle(ref, () => ({
    collapseAll: () => {
      setExpanded([]);
    },
  }));

  const handleNodeToggle = (event: SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  return (
    <TreeViewRoot
      expanded={expanded}
      onNodeToggle={handleNodeToggle}
      defaultCollapseIcon={<VscChevronDown />}
      defaultExpandIcon={<VscChevronRight />}
      multiSelect
    >
      {rootList.map(renderTree)}
    </TreeViewRoot>
  );
};

export default forwardRef(FolderTree);
