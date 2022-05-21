import { useState, useEffect, useLayoutEffect } from 'react';
import MonacoEditor, { useMonaco } from '@monaco-editor/react';
import { EditorStore, FileExplorerStore } from '@store';
import { FileData } from '@models';
import { getLanguageId } from '@utils/helper';

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

    return () => editorStore.unsubscribe();
  }, []);

  useEffect(() => {
    if (monaco && code && file) {
      const supportedLangugaes = monaco.languages.getLanguages();
      const extension = `.${file.name.split('.').at(-1)}`;
      const languageId = getLanguageId(supportedLangugaes, extension);
      monaco.editor.setModelLanguage(monaco.editor.getModels()[0], languageId);
    }
  }, [monaco, code, file]);

  useLayoutEffect(() => {
    if (monaco) {
      // validation settings
      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.Latest,
        module: monaco.languages.typescript.ModuleKind.ES2015,
        allowNonTsExtensions: true,
        lib: ['es2018'],
      });
    }
  }, [monaco]);

  return <MonacoEditor value={code} defaultLanguage="javascript" theme="vs-dark" />;
};

export default Editor;
