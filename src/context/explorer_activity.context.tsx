import { ExplorerActivity } from '@models';
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

type ExplorerActiityState = {
  name: ExplorerActivity;
  expanded: boolean;
  show: boolean;
};

type ExplorerContext = {
  explorerActivity: ExplorerActiityState[];
  showExplorerActivity: (name: ExplorerActivity, show: boolean) => void;
  expandExplorerActivity: (name: ExplorerActivity, expanded: boolean) => void;
};

const getInitialData = () => {
  const initialData = [];
  for (const list of Object.values(ExplorerActivity)) {
    initialData.push({
      name: list,
      expanded: false,
      show: true,
    });
  }
  return initialData;
};

const ExplorerCtx = createContext<Nullable<ExplorerContext>>(null);

const ExplorerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [explorerActivity, setExplorerActivity] = useState<ExplorerActiityState[]>(getInitialData());

  const showExplorerActivity = useCallback((name: ExplorerActivity, show: boolean) => {
    setExplorerActivity((prevState) => prevState.map((s) => (s.name === name ? { ...s, show } : s)));
  }, []);

  const expandExplorerActivity = useCallback((name: ExplorerActivity, expanded: boolean) => {
    setExplorerActivity((prevState) => prevState.map((s) => (s.name === name ? { ...s, expanded } : s)));
  }, []);

  return (
    <ExplorerCtx.Provider value={{ explorerActivity, showExplorerActivity, expandExplorerActivity }}>
      {children}
    </ExplorerCtx.Provider>
  );
};

export default ExplorerProvider;

export const useExplorer = () => useContext(ExplorerCtx);
