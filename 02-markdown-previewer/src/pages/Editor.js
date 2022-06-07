
function Editor(props) {
  const { editorText, setEditorText } = props;
  const handleChange = e => {
    setEditorText(e.target.value);
  }

  return (
    <textarea id="editor" onChange={handleChange}></textarea>
  );
}

export default Editor;