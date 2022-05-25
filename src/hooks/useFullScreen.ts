import { useEffect, useState } from 'react';
import { fullScreenService } from '@utils/helper';

const useFullScreen = () => {
  const [fullScreen, setFullScreen] = useState(fullScreenService.enabled);

  const updateFullScreenState = () => {
    setFullScreen(fullScreenService.enabled);
  };

  const keyPressHandler = (event: KeyboardEvent) => {
    event.code === 'F11' && event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', updateFullScreenState);
    document.addEventListener('keydown', keyPressHandler);

    return () => {
      document.removeEventListener('fullscreenchange', updateFullScreenState);
      document.removeEventListener('keydown', keyPressHandler);
    };
  }, []);

  const toggleFullScreen = () => {
    fullScreenService.toggle.call(fullScreenService);
  };

  return {
    fullScreen,
    toggleFullScreen,
  };
};

export default useFullScreen;
