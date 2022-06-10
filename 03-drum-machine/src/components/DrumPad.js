import { Badge } from "@mui/material";

function DrumPad(props) {
  const {english, romaji, japanese, keypress, file, picture, showTransition, setShowTransition} = props;
  const {playAudio, setSample} = props;
  const sample = {english, romaji, japanese, keypress, file, picture};

  const clickPicture = () => {
    setSample(sample);
    playAudio(file);
    setShowTransition({...showTransition, display: !showTransition.display});
  }
  return (
    <Badge color="secondary" overlap="circular" badgeContent={keypress.toUpperCase()}>
      <img 
        id={keypress}
        src={picture}
        srcSet={picture}
        onClick={clickPicture}
      />
    </Badge>
  );
}

export default DrumPad;