import { useMemo, ForwardRefRenderFunction, forwardRef, useImperativeHandle, useEffect, useState } from 'react';
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
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const handleActiveChange = (active: string) => (prevState: string) => {
      if (prevState !== active && active) {
        const element = document.querySelector(`li[id=":rj:-${active}"]`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return active;
    };

    const editorStore = EditorStore.subject.subscribe((v) => {
      setSelected(handleActiveChange(v.active));
    });

    return () => editorStore.unsubscribe();
  }, []);

  const handleSelected = (event: React.SyntheticEvent, nodeId: string) => {
    setSelected(nodeId);
  };

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
      selected={selected}
      onNodeSelect={handleSelected}
    >
      {rootList.map(renderTree)}
    </TreeView>
  );
};

export default forwardRef(FolderTree);
