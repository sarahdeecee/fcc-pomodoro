
function DrumPad(props) {
  const {sound, keypress, file, picture} = props;
  const {playAudio} = props;
  return (
    <img 
      src={`${picture}`}
      srcSet={`${picture}`}
      onClick={() => playAudio(file)}
    />
  );
}

export default DrumPad;