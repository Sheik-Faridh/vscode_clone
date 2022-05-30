import { FileData } from '@models';
import { EditorStore, FileExplorerStore, StatusBarStore } from '@store';
import { useEffect, useState } from 'react';

const useOpenEditor = () => {
  const [openFiles, setOpenFiles] = useState<string[]>([]);
  const [files, setFiles] = useState<Partial<FileData>[]>([]);

  useEffect(() => {
    const editorStore = EditorStore.subject.subscribe((v) => {
      setOpenFiles(v.openFiles);
    });

    const fileExplorerStore = FileExplorerStore.subject.subscribe((v) => {
      setFiles(v.files);
    });

    return () => {
      fileExplorerStore.unsubscribe();
      editorStore.unsubscribe();
    };
  }, []);

  const handleClose = (id: string) => (event: React.MouseEvent<HTMLOrSVGElement>) => {
    event.stopPropagation();
    EditorStore.closeFile(id);
    StatusBarStore.reset();
  };

  const handleActive = (id: string) => () => {
    EditorStore.setActive(id);
  };

  return {
    openFiles,
    files,
    handleClose,
    handleActive,
  };
};

export default useOpenEditor;
