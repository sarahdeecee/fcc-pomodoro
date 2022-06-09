
function Display(props) {
  const {english, romaji, japanese, keypress, file, picture, theme} = props;
  const sample = {english, romaji, japanese};
  return (
    <h1 id="display">{sample[theme.language]}</h1>
  );
}

export default Display;