import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useExplorer } from '@context';
import { ExplorerActivity } from '@models';

const useExplorerAccordion = (name: ExplorerActivity) => {
  const [height, setHeight] = useState(window.innerHeight);
  const { expandExplorerActivity, explorerActivity } = useExplorer();
  const handleChange = (event: SyntheticEvent, newExpanded: boolean) => {
    expandExplorerActivity(name, newExpanded);
  };

  const accordionHeight = useMemo(() => {
    const isExpanded = explorerActivity.find((e) => e.name === name).expanded;
    if (!isExpanded) return 'auto';

    const totalExpanded = explorerActivity.filter((e) => e.expanded).length;
    const totalAccordions = explorerActivity.filter((e) => e.show).length;
    const totalHeightAvailable = height - 110 - totalAccordions * 31;
    return `${Math.ceil(totalHeightAvailable / totalExpanded)}px`;
  }, [explorerActivity, height]);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [height]);

  return { handleChange, accordionHeight };
};

export default useExplorerAccordion;
