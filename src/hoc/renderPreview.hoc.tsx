import { ComponentType, useEffect, useMemo, useState } from 'react';
import Preview from '@components/Preview';
import { EditorStore, FileExplorerStore } from '@store';
import { FileData } from '@models';
import { isImage } from '@utils/helper';

const renderPreview = (Editors: ComponentType) => {
  const HOC = () => {
    const [assets, setAssets] = useState<Record<string, string>>({});
    const [files, setFiles] = useState<Partial<FileData>[]>([]);
    const [active, setActive] = useState('');

    useEffect(() => {
      const fileExplorerStore = FileExplorerStore.subject.subscribe((v) => {
        setAssets(v.assets);
        setFiles(v.files);
      });

      const editorStore = EditorStore.subject.subscribe((v) => {
        setActive(v.active);
      });

      return () => {
        fileExplorerStore.unsubscribe();
        editorStore.unsubscribe();
      };
    }, []);

    const filePreview = useMemo(() => {
      const file = files.find((f) => f.sha === active);
      if (!file) return { preview: false, content: null, type: null };
      return { preview: isImage(file.name), content: assets[file.sha] || '', type: 'image' };
    }, [files, assets, active]);

    return filePreview.preview ? <Preview content={filePreview.content} /> : active ? <Editors /> : <></>;
  };

  return HOC;
};

export default renderPreview;
