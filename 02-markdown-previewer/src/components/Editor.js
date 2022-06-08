
function Editor(props) {
  const { editorText, setEditorText } = props;
  const handleChange = e => {
    setEditorText((e.target.value).toString());
  }

  return (
    <textarea id="editor" onChange={handleChange}>{editorText}</textarea>
  );
}

export default Editor;