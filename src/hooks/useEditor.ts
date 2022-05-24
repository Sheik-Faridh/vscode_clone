import { useState, useEffect, useLayoutEffect } from 'react';
import { useMonaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { EditorStore, FileExplorerStore, StatusBarStore } from '@store';
import { FileData } from '@models';
import { getLanguageId } from '@utils/helper';

const useEditor = () => {
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
      const [languageId, languageName] = getLanguageId(supportedLangugaes, extension);
      monaco.editor.setModelLanguage(monaco.editor.getModels()[0], languageId);
      StatusBarStore.setFileType(languageName);
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

  const handleOnMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.onMouseDown(() => {
      StatusBarStore.setCursorPosition(editor.getPosition().lineNumber, editor.getPosition().column);
    });
  };

  return { code, handleOnMount };
};

export default useEditor;
