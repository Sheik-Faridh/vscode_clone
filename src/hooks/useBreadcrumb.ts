import { useEffect, useMemo, useState } from 'react';
import { FileData } from '@models';
import { EditorStore, FileExplorerStore } from '@store';
import { getFolderTraverseList } from '@utils/helper';

const useBreadcrumb = () => {
  const [filesList, setFilesList] = useState<Partial<FileData>[]>([]);
  const [activeFile, setActiveFile] = useState('');
  const [parentNode, setParentNode] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fileExplorerStore = FileExplorerStore.subject.subscribe((v) => {
      setFilesList(v.files);
    });

    const editorStore = EditorStore.subject.subscribe((v) => {
      setActiveFile(v.active);
    });

    return () => {
      fileExplorerStore.unsubscribe();
      editorStore.unsubscribe();
    };
  }, []);

  const fileTraverseList = useMemo(() => getFolderTraverseList(filesList, activeFile), [activeFile, filesList]);

  const handleClick = (id: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setParentNode(id);
    setAnchorEl(event.currentTarget);
  };

  return { fileTraverseList, handleClick, anchorEl, open, handleClose, parentNode };
};

export default useBreadcrumb;
