import { VscClose, VscChromeMaximize, VscChromeRestore } from 'react-icons/vsc';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useFullScreen } from '@hooks';

const HeaderActions = () => {
  const { fullScreen, toggleFullScreen } = useFullScreen();

  const closeWindow = () => {
    window.close();
  };

  return (
    <Box>
      <IconButton size="small" onClick={toggleFullScreen}>
        {fullScreen ? <VscChromeRestore /> : <VscChromeMaximize />}
      </IconButton>
      <IconButton size="small" onClick={closeWindow}>
        <VscClose />
      </IconButton>
    </Box>
  );
};

export default HeaderActions;
