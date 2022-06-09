
function Display(props) {
  const {english, japanese, keypress, file, picture} = props.sample;
  return (
    <h1 id="sound-header">{english ? english : 'Anya'}</h1>
  );
}

export default Display;