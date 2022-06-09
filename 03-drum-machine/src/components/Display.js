
function Display(props) {
  const {english, romaji, japanese, keypress, file, picture, theme} = props;
  const sample = {english, romaji, japanese};
  return (
    <h1 id="sound-header">{sample[theme.language]}</h1>
  );
}

export default Display;