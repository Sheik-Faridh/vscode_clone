import { useId, useState } from 'react';

const useMenu = () => {
  const buttonId = useId();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return { buttonId, open, setAnchorEl, anchorEl };
};

export default useMenu;
