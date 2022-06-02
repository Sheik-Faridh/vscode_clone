import MonacoEditor from '@monaco-editor/react';
import { useEditor } from '@hooks';
import renderPreview from '@hoc/renderPreview.hoc';

const Editor = () => {
  const { code, handleOnMount } = useEditor();

  return <MonacoEditor value={code} onMount={handleOnMount} theme="vs-dark" />;
};

export default renderPreview(Editor);
