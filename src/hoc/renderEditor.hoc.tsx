import { EditorStore } from '@store';
import { ComponentType, useEffect, useState } from 'react';

const renderEditor = (Editor: ComponentType) => {
  const HOC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const store = EditorStore.subject.subscribe((v) => {
        setShow(v.active ? true : false);
      });

      return () => store.unsubscribe();
    }, []);

    return show && <Editor />;
  };

  return HOC;
};

export default renderEditor;
