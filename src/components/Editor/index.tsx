import MonacoEditor, { useMonaco } from '@monaco-editor/react';

const Editor = () => {
  const monaco = useMonaco();

  return (
    <MonacoEditor height="100%" defaultLanguage="typescript" defaultValue="//Write your code here" theme="vs-dark" />
  );
};

export default Editor;
