import { useCallback, useEffect, useRef } from 'react';
import { PanelStore, SideBarStore } from '@store';

const useShortcuts = () => {
  const lastKeyPressRef = useRef('');
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.code === 'KeyG' && lastKeyPressRef.current === 'Ctrl+Shift+G') {
      event.preventDefault();
      SideBarStore.toggle('Source Control');
    }

    if (event.code === 'Backquote' && event.ctrlKey) PanelStore.toggle();
    if (event.code === 'KeyE' && event.ctrlKey && event.shiftKey) SideBarStore.toggle('Explorer');
    if (event.code === 'KeyF' && event.ctrlKey && event.shiftKey) SideBarStore.toggle('Search');
    if (event.code === 'KeyD' && event.ctrlKey && event.shiftKey) SideBarStore.toggle('Run and Debug');
    if (event.code === 'KeyX' && event.ctrlKey && event.shiftKey) SideBarStore.toggle('Extensions');

    if (event.code === 'KeyG' && event.ctrlKey && event.shiftKey) {
      event.preventDefault();
      lastKeyPressRef.current = 'Ctrl+Shift+G';
      setTimeout(() => (lastKeyPressRef.current = ''), 4000);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

export default useShortcuts;
