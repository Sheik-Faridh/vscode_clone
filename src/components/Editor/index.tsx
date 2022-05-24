import MonacoEditor from '@monaco-editor/react';
import { useEditor } from '@hooks';

const Editor = () => {
  const { code, handleOnMount } = useEditor();

  return <MonacoEditor value={code} onMount={handleOnMount} defaultLanguage="javascript" theme="vs-dark" />;
};

export default Editor;
