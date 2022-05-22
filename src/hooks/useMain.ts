import { useState, useEffect, useMemo } from 'react';
import { SideBarStore, PanelStore } from '@store';

const useMain = () => {
  const [showSideBar, setShowSideBar] = useState(SideBarStore.isOpen);
  const [panel, setPanel] = useState(PanelStore.state);

  useEffect(() => {
    const sidebarStore = SideBarStore.subject.subscribe((v) => {
      setShowSideBar(v.open);
    });

    const panelStore = PanelStore.subject.subscribe((v) => {
      setPanel(v);
    });

    return () => {
      sidebarStore.unsubscribe();
      panelStore.unsubscribe();
    };
  }, []);

  const horizontalSplitter = useMemo(
    () => ({ initialSizes: showSideBar ? [20, 80] : [0, 100], minWidths: [200, 350] }),
    [showSideBar],
  );

  const verticalSplitter = useMemo(() => {
    const minHeights = [0, 0];
    const initialSizes = panel.open ? (panel.mode === 'full' ? [0, 100] : [50, 50]) : [100, 0];
    return { minHeights, initialSizes };
  }, [panel]);

  return {
    horizontalSplitter,
    verticalSplitter,
  };
};

export default useMain;
