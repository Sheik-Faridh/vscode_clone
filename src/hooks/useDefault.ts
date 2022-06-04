import { EditorStore, FileExplorerStore } from '@store';
import { useEffect } from 'react';

const useDefault = () => {
  useEffect(() => {
    const store = FileExplorerStore.subject.subscribe((v) => {
      const file = v.files.find((f) => f.name === 'README.md' && f.parent === null);
      if (file) EditorStore.openFile(file.sha);
    });

    return () => store.unsubscribe();
  }, []);
};

export default useDefault;
