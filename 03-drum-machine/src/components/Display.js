
function Display(props) {
  const {sound, keypress, file, picture} = props.sample;
  return (
    <h1 id="sound-header">{sound ? sound : 'Anya'}</h1>
  );
}

export default Display;