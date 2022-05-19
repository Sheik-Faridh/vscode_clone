import { useState, useEffect, useLayoutEffect } from 'react';
import MonacoEditor, { useMonaco } from '@monaco-editor/react';
import { EditorStore, FileExplorerStore } from '@store';
import { FileData } from '@models';

const Editor = () => {
  const [file, setFile] = useState<Partial<FileData>>();
  const [code, setCode] = useState('');
  const monaco = useMonaco();

  useEffect(() => {
    const editorStore = EditorStore.subject.subscribe((d) => {
      const { files, contents } = FileExplorerStore.state;
      setCode(contents[d.active] || '');
      const file = files.find((f) => f.sha === d.active);
      if (file) setFile(file);
    });

    return () => {
      editorStore.unsubscribe();
    };
  }, []);

  useLayoutEffect(() => {
    if (monaco && code && file) {
      const model = monaco.editor.createModel(
        code,
        undefined, // language
        monaco.Uri.file(file.name), // uri
      );
      monaco.editor.setModelLanguage(model, model.getLanguageId());
    }
  }, [monaco, code, file]);

  return <MonacoEditor value={code} language="javascript" theme="vs-dark" />;
};

export default Editor;
