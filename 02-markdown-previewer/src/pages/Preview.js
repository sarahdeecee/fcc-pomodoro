import { marked } from 'marked';

function Preview(props) {
  const {editorText, setEditorText} = props;
  const parsedText = marked.parse('# Marked in Node.js');

  return (
    <div id="preview">
      <p>
        {parsedText}
      </p>
    </div>
  );
}

export default Preview;
