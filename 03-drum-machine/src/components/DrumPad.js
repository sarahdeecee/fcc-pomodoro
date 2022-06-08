
function DrumPad(props) {
  const {sound, keypress, file, picture} = props;
  return (
    <img 
      src={`${picture}`}
      srcSet={`${picture}`}
      onClick={() => console.log(picture)}
    />
  );
}

export default DrumPad;