import { Button, Typography } from '@mui/material';
import { useTimer } from 'react-timer-hook';

function Timer(props) {
  return (
    <div>
      <Typography id="time-left" variant="h1">25:00</Typography>
    </div>
  );
}

export default Timer;
