
function DrumPad(props) {
  const {sound, keypress, file, picture} = props;
  const {playAudio, setSample} = props;

  const clickPicture = () => {
    setSample({sound, keypress, file, picture});
    playAudio(file);
  }
  return (
    <img 
      src={picture}
      srcSet={picture}
      onClick={clickPicture}
    />
  );
}

export default DrumPad;