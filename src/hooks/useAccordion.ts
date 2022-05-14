import { useState, SyntheticEvent } from 'react';

const useAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded);
  };
  return { expanded, handleChange };
};

export default useAccordion;
