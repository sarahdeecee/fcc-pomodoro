import './App.css';
import './styles/theme.scss';
import * as React from 'react';
import {useState} from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Menu from './components/Menu';

function App() {
  const [editorText, setEditorText] = useState(`# Markdown Previewer
> This application gives you a live preview of markdown text

## How to Use

1. Type markdown in the box on the left
2. See a live preview in the box on the right

You can see code, \`<p>here</p>\`, between backticks.
\`\`\`
// Multi-line code looks like this
const sayHello = name => {
  return 'Hello, ' + name;
}
\`\`\`

### Credits
- **Marked**: https://github.com/markedjs/marked/
- **Markdown**: http://daringfireball.net/projects/markdown/
- Made by **Sarah Dela Cruz**

![Sarah Dela Cruz's GitHub](https://github.com/sarahdeecee/sarahdeecee/raw/main/data/profile-banner.png)`);
  const [menu, setMenu] = useState({
    orientation: 'horizontal',
    theme: 'light'
  });

  return (
    <div className={`App ${menu.theme} ${menu.orientation}`}>
      <Menu menu={menu} setMenu={setMenu} />
      <div className="container">
        <Editor editorText={editorText} setEditorText={setEditorText} />
        <Preview editorText={editorText} />
      </div>
    </div>
  );
}

export default App;
