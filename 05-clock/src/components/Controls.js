import { Pause, PlayArrow, RestartAlt } from '@mui/icons-material';
import { Button } from '@mui/material';

function Controls(props) {
  const {play, setPlay} = props;

  const handleReset = () => {
    setPlay(false);
  }

  return (
    <div>
      {play ? <PlayArrow id="start_stop" /> : <Pause id="start_stop" />}
      <RestartAlt id="reset" onClick={handleReset} />
    </div>
  );
}

export default Controls;
