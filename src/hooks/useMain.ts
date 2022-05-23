import { useState, useEffect, useMemo, useRef } from 'react';
import { SideBarStore, PanelStore } from '@store';
import { PanelMode } from '@models';

const useMain = () => {
  const [showSideBar, setShowSideBar] = useState(SideBarStore.isOpen);
  const [panel, setPanel] = useState(PanelStore.state);
  const panelHeightRef = useRef<number>(0);

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
    const initialSizes = panel.open
      ? panel.mode === 'full'
        ? [0, 100]
        : [100 - panelHeightRef.current, panelHeightRef.current]
      : [100, 0];
    return { minHeights, initialSizes };
  }, [panel, panelHeightRef]);

  const handleVerticalSplitterResizeFinish = (pairIdx: number, newSizes: number[]) => {
    const [editorHeight, panelHeight] = newSizes;
    if (Math.floor(editorHeight) === 0) {
      PanelStore.open(PanelMode.FULL);
      panelHeightRef.current = 50;
    } else {
      PanelStore.open(PanelMode.NONE);
      panelHeightRef.current = panelHeight;
    }

    if (Math.floor(panelHeight) === 0) {
      PanelStore.close();
    }
  };

  const isTransparent = useMemo(() => {
    return panel.mode === PanelMode.FULL || Math.floor(panelHeightRef.current) === 0;
  }, [panel, panelHeightRef]);

  return {
    horizontalSplitter,
    verticalSplitter,
    handleVerticalSplitterResizeFinish,
    isTransparent,
  };
};

export default useMain;
