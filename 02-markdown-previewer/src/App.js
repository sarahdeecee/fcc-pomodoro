import './App.css';
import * as React from 'react';
import {useState} from 'react';
import { marked } from 'marked';
import Editor from './pages/Editor';
import Preview from './pages/Preview';

marked.setOptions({
  renderer: new marked.Renderer(),
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: true,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

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
