import './App.css';
import * as React from 'react';
import {useState} from 'react';
import Editor from './pages/Editor';
import Preview from './pages/Preview';

function App() {
  const [editorText, setEditorText] = useState('');

  return (
    <div className="App">
      <h1>Editor:</h1>
      <Editor editorText={editorText} setEditorText={setEditorText} />
      <h1>Preview:</h1>
      <Preview editorText={editorText} />
    </div>
  );
}

export default App;
