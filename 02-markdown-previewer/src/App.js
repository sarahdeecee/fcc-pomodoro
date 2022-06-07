import './App.css';
import {useState} from 'react';
import Editor from './pages/Editor';
import Preview from './pages/Preview';

function App() {
  const {editorText, setEditorText} = useState('# Marked in Node.js');
  // const content = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

  return (
    <div className="App">
      <Editor editorText={editorText} setEditorText={setEditorText} />
      <Preview editorText={editorText} />
    </div>
  );
}

export default App;
