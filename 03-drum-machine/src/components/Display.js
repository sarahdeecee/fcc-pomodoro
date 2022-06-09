
function Display(props) {
  const {english, japanese, keypress, file, picture, theme} = props;
  const line = (theme.language === 'english') ? english : japanese;
  return (
    <h1 id="sound-header">{english ? line : 'Anya'}</h1>
  );
}

export default Display;