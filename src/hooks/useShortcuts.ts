import { PanelStore } from '@store';
import { useCallback, useEffect } from 'react';

const useShortcuts = () => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.code === 'Backquote' && event.ctrlKey) PanelStore.toggle();
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

export default useShortcuts;
