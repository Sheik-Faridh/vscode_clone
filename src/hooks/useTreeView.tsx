import { useState, useEffect, SyntheticEvent, MouseEventHandler } from 'react';
import TreeItem from '@mui/lab/TreeItem';
import FileIcon from '@components/FileIcon';
import { EditorStore, FileExplorerStore } from '@store';
import { FileData, FileType } from '@models';
import { sortTreeView } from '@utils/helper';

type HandleClick = (id: string, type: FileType) => MouseEventHandler<HTMLLIElement>;

const useTreeView = (handleClick: HandleClick) => {
  const [filesList, setFilesList] = useState<Partial<FileData>[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  useEffect(() => {
    const fileExplorerStore = FileExplorerStore.subject.subscribe((v) => {
      setFilesList(v.files);
    });

    return () => fileExplorerStore.unsubscribe();
  }, []);

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

  const handleNodeToggle = (event: SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  return {
    handleNodeToggle,
    expanded,
    setExpanded,
    renderTree,
    filesList,
  };
};

export default useTreeView;
