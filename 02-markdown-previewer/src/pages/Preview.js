import { marked } from 'marked';

function Preview(props) {
  const {editorText} = props;

  return (
    <div id="preview">
      {marked.parseInline(editorText)}
    </div>
  );
}

export default Preview;
