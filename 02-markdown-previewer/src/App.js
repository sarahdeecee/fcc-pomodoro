import './App.css';
import * as React from 'react';
import {useState} from 'react';
import Editor from './pages/Editor';
import Preview from './pages/Preview';

function App() {
  const [editorText, setEditorText] = useState('');

  return (
    <div className="App">
      <Editor editorText={editorText} setEditorText={setEditorText} />
      <Preview editorText={editorText} />
    </div>
  );
}

export default App;
