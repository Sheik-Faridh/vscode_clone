import MonacoEditor from '@monaco-editor/react';

const code = `
import React, { PureComponent } from 'react';
import MonacoEditor from '@uiw/react-monacoeditor';

export default class App extends PureComponent {
  render() {
    return (
      <MonacoEditor
        language="html"
        value="<h1>I ♥ react-codemirror2</h1>"
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: false,
          theme: 'vs-dark',
        }}
      />
    );
  }
}
`;

const Editor = () => {
  return <MonacoEditor value={code} language="javascript" theme="vs-dark" options={{ readOnly: false }} />;
};

export default Editor;
