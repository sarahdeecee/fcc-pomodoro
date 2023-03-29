import { Typography } from '@mui/material';

function Timer(props: any) {
  const {timeLeft} = props;
  const {minutes, seconds} = timeLeft;

  return (
    <div>
      <Typography id="time-left" variant="h1">{(minutes < 10) ? `0${minutes}` : `${minutes}`}:{(seconds < 10) ? `0${seconds}` : `${seconds}`}</Typography>
    </div>
  );
}

export default Timer;
