import { EditorStore, FileExplorerStore } from '@store';
import { useLayoutEffect } from 'react';

const useDefault = () => {
  useLayoutEffect(() => {
    const store = FileExplorerStore.subject.subscribe((v) => {
      const file = v.files.find((f) => f.name === 'README.md' && f.parent === null);
      if (file) EditorStore.openFile(file.sha);
    });

    return () => store.unsubscribe();
  }, []);
};

export default useDefault;
