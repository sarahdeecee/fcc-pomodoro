import './App.css';
import * as React from 'react';
import {useState} from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Menu from './components/Menu';

function App() {
  const [editorText, setEditorText] = useState('');
  const [menu, setMenu] = useState({
    orientation: 'horizontal',
    theme: 'light'
  });

  return (
    <div className="App">
      <Menu menu={menu} setMenu={setMenu} />
      <div className="container">
        <Editor editorText={editorText} setEditorText={setEditorText} />
        <Preview editorText={editorText} />
      </div>
    </div>
  );
}

export default App;
