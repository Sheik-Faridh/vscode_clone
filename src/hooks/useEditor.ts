import { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { useMonaco } from '@monaco-editor/react';
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { EditorStore, FileExplorerStore, StatusBarStore, ThemeStore } from '@store';
import { FileData, Theme } from '@models';
import { getLanguageId } from '@utils/helper';

const useEditor = () => {
  const [file, setFile] = useState<Partial<FileData>>();
  const [code, setCode] = useState('');
  const [theme, setTheme] = useState<Theme>(ThemeStore.state.mode);
  const monaco = useMonaco();

  useLayoutEffect(() => {
    const themeStore = ThemeStore.subject.subscribe((v) => {
      setTheme(v.mode);
    });

    return () => themeStore.unsubscribe();
  }, []);

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
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.Latest,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        lib: ['es2018'],
        noEmit: true,
        esModuleInterop: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        reactNamespace: 'React',
        allowJs: true,
        typeRoots: ['node_modules/@types'],
      });

      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
      });

      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        '<<react-definition-file>>',
        `file:///node_modules/@react/types/index.d.ts`,
      );
    }
  }, [monaco]);

  const handleOnMount = (editor: Monaco.editor.IStandaloneCodeEditor) => {
    editor.onMouseDown(() => {
      StatusBarStore.setCursorPosition(editor.getPosition().lineNumber, editor.getPosition().column);
    });
  };

  const monacoTheme = useMemo(() => (theme === 'dark' ? 'vs-dark' : 'light'), [theme]);

  return { code, handleOnMount, monacoTheme };
};

export default useEditor;
