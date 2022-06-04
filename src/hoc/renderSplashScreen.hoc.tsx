import { ComponentType, useLayoutEffect, useState, startTransition } from 'react';
import SplashScreen from '@components/SplashScreen';
import { FileExplorerStore } from '@store';

const renderSplashScreen = (Layout: ComponentType) => {
  const HOC = () => {
    const [show, setShow] = useState(true);

    useLayoutEffect(() => {
      const store = FileExplorerStore.subject.subscribe((v) => {
        startTransition(() => {
          setShow(v.isFetching);
        });
      });

      return () => store.unsubscribe();
    }, []);

    return (
      <>
        <Layout />
        {show && <SplashScreen />}
      </>
    );
  };

  return HOC;
};

export default renderSplashScreen;
