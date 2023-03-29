import { Pause, PlayArrow, RestartAlt } from '@mui/icons-material';
import { Button } from '@mui/material';

function Controls(props) {
  const {play, setPlay, reset} = props;

  const handlePause = () => {
    setPlay(false);
  }

  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <div>
      {play ? <Button id="start_stop" onClick={handlePause}><Pause /></Button> : <Button id="start_stop" onClick={handlePlay}><PlayArrow /></Button>}
      <Button id="reset" onClick={() => reset()}><RestartAlt /></Button>
    </div>
  );
}
export default Controls;
