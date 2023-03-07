import { Pause, PlayArrow, RestartAlt } from '@mui/icons-material';
import { Button } from '@mui/material';

function Controls(props) {
  const {play, setPlay, setLength} = props;

  const handlePause = () => {
    setPlay(false);
  }

  const handleReset = () => {
    handlePause();
    setLength(25);
  }
  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <div>
      {play ? <Pause id="start_stop" onClick={handlePause} /> : <PlayArrow id="start_stop" onClick={handlePlay} /> }
      <RestartAlt id="reset" onClick={handleReset} />
    </div>
  );
}

export default Controls;
