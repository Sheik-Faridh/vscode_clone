import { ComponentType, useEffect, useState } from 'react';
import LogoPaper from '@components/LogoPaper';
import { EditorStore } from '@store';

const renderEditor = (Editors: ComponentType) => {
  const HOC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const store = EditorStore.subject.subscribe((v) => {
        setShow(v.active ? true : false);
      });

      return () => store.unsubscribe();
    }, []);

    return show ? <Editors /> : <LogoPaper />;
  };

  return HOC;
};

export default renderEditor;
