import { PlayArrow, RestartAlt } from '@mui/icons-material';
import { Button } from '@mui/material';

function Controls(props) {
  return (
    <div>
      <PlayArrow id="start_stop" />
      <RestartAlt id="reset" />
    </div>
  );
}

export default Controls;
