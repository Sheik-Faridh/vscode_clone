import { useMemo, ForwardRefRenderFunction, forwardRef, useImperativeHandle } from 'react';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import TreeView from '@atoms/TreeView';
import { useTreeView } from '@hooks';
import { EditorStore } from '@store';
import { FileType } from '@models';
import { sortTreeView } from '@utils/helper';

type FolderTreeHandle = {
  collapseAll: () => void;
};

const FolderTree: ForwardRefRenderFunction<FolderTreeHandle> = (props, ref) => {
  const handleClick = (id: string, type: FileType) => () => {
    type === 'blob' && EditorStore.openFile(id);
  };

  const { handleNodeToggle, expanded, setExpanded, renderTree, filesList } = useTreeView(handleClick);

  useImperativeHandle(ref, () => ({
    collapseAll: () => {
      setExpanded([]);
    },
  }));

  const rootList = useMemo(() => sortTreeView(filesList.filter((file) => !file.parent)), [filesList]);

  return (
    <TreeView
      expanded={expanded}
      onNodeToggle={handleNodeToggle}
      defaultCollapseIcon={<VscChevronDown />}
      defaultExpandIcon={<VscChevronRight />}
      multiSelect
    >
      {rootList.map(renderTree)}
    </TreeView>
  );
};

export default forwardRef(FolderTree);
