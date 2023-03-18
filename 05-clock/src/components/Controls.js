import { Pause, PlayArrow, RestartAlt } from '@mui/icons-material';
import { Button } from '@mui/material';

function Controls(props) {
  const {play, setPlay, timeLeft, setTimeLeft, reset} = props;

  const handlePause = () => {
    setPlay(false);
  }

  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <div>
      {play ? <Pause id="start_stop" onClick={handlePause} /> : <PlayArrow id="start_stop" onClick={handlePlay} /> }
      <RestartAlt id="reset" onClick={reset} />
    </div>
  );
}
export default Controls;
