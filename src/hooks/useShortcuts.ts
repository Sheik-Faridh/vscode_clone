import { useCallback, useEffect, useRef } from 'react';
import { PanelStore, SideBarStore, StatusBarStore } from '@store';
import { PanelType } from '@models';
import { getShortcutKey } from '@utils/helper';

const useShortcuts = () => {
  const lastKeyPressRef = useRef('');
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const clearAction = useCallback(() => {
    lastKeyPressRef.current = '';
    StatusBarStore.setAction('');
    timerRef.current && clearInterval(timerRef.current);
  }, []);

  const delayClearAction = useCallback(() => {
    timerRef.current = undefined;
    clearAction();
  }, [clearAction]);

  const setAction = useCallback(
    (shortcut: string) => {
      lastKeyPressRef.current = shortcut;
      StatusBarStore.setAction(`(${shortcut}) was pressed. Waiting for second key of chord...`);
      timerRef.current = setTimeout(delayClearAction, 4000);
    },
    [delayClearAction],
  );

  const setInvalidAction = useCallback(
    (key: string) => {
      timerRef.current && clearInterval(timerRef.current);
      StatusBarStore.setAction(
        `The key combination (${lastKeyPressRef.current}, ${key.toUpperCase()}) is not a command...`,
      );
      lastKeyPressRef.current = '';
      timerRef.current = setTimeout(delayClearAction, 4000);
    },
    [delayClearAction],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.repeat) return;
      if (event.ctrlKey || event.shiftKey) event.preventDefault();

      const shortcutKey = getShortcutKey(event);

      if (shortcutKey === 'G' && lastKeyPressRef.current === 'Ctrl+Shift+G') {
        SideBarStore.toggle('Source Control');
        clearAction();
        return;
      }

      if (shortcutKey === 'Ctrl+H' && lastKeyPressRef.current === 'Ctrl+K') {
        PanelStore.setPanelType(PanelType.output);
        clearAction();
        return;
      }

      if (lastKeyPressRef.current) {
        setInvalidAction(event.key);
        return;
      }

      switch (shortcutKey) {
        case 'Ctrl+Shift+G':
          setAction(shortcutKey);
          return;
        case 'Ctrl+K':
          setAction('Ctrl+K');
          return;
        case 'Ctrl+`':
          PanelStore.setPanelType(PanelType.terminal);
          return;
        case 'Ctrl+Shift+E':
          SideBarStore.toggle('Explorer');
          return;
        case 'Ctrl+Shift+F':
          SideBarStore.toggle('Search');
          return;
        case 'Ctrl+Shift+D':
          SideBarStore.toggle('Run and Debug');
          return;
        case 'Ctrl+Shift+X':
          SideBarStore.toggle('Extensions');
          return;
        case 'Ctrl+Shift+Y':
          PanelStore.setPanelType(PanelType.debug);
          return;
        case 'Ctrl+Shift+M':
          PanelStore.setPanelType(PanelType.problem);
          return;
        default:
          return;
      }
    },
    [clearAction, setAction, setInvalidAction],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      timerRef.current && clearInterval(timerRef.current);
    };
  }, []);
};

export default useShortcuts;
