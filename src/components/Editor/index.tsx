import MonacoEditor from '@monaco-editor/react';
import { useEditor } from '@hooks';
import renderPreview from '@hoc/renderPreview.hoc';

const Editor = () => {
  const { code, handleOnMount, monacoTheme } = useEditor();

  return <MonacoEditor value={code} onMount={handleOnMount} theme={monacoTheme} />;
};

export default renderPreview(Editor);
