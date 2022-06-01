import { useEffect, useMemo, useState } from 'react';
import { FileData } from '@models';
import { EditorStore, FileExplorerStore } from '@store';
import { getFolderTraverseList } from '@utils/helper';

const useBreadcrumb = () => {
  const [filesList, setFilesList] = useState<Partial<FileData>[]>([]);
  const [activeFile, setActiveFile] = useState('');

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

  return { fileTraverseList };
};

export default useBreadcrumb;
