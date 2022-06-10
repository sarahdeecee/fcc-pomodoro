import { Badge } from "@mui/material";
import { CSSTransition } from "react-transition-group";

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
    <CSSTransition timeout={50}>
      <Badge color="secondary" overlap="circular" badgeContent={keypress.toUpperCase()}>
        <img 
          id={keypress}
          src={picture}
          srcSet={picture}
          alt={english}
          onClick={clickPicture}
        />
      </Badge>
    </CSSTransition>
  );
}

export default DrumPad;