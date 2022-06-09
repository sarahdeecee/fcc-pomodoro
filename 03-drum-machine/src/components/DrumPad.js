import { Badge } from "@mui/material";

function DrumPad(props) {
  const {sound, keypress, file, picture} = props;
  const {playAudio, setSample} = props;

  const clickPicture = () => {
    setSample({sound, keypress, file, picture});
    playAudio(file);
  }
  return (
    <Badge sx={{ color: '#fff'}} color="secondary" overlap="circular" badgeContent={keypress.toUpperCase()}>
      <img 
        id={sound}
        src={picture}
        srcSet={picture}
        onClick={clickPicture}
      />
    </Badge>
  );
}

export default DrumPad;