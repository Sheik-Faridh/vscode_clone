import { useEffect, useState } from 'react';
import { ExtensionStore } from '@store';
import { Extension } from '@models';

const useExtension = () => {
  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
    const store = ExtensionStore.subject.subscribe((v) => {
      setExtensions(v.extensions);
    });

    return () => store.unsubscribe();
  }, []);

  return extensions;
};

export default useExtension;
