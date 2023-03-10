import { Typography } from '@mui/material';

function Timer(props: any) {
  const {timeLeft} = props;
  const {minutes, seconds} = timeLeft;
  const addPreceedingZero = (seconds: number): number | null => {
    if (seconds < 10) {
      return 0;
    } else {
      return null;
    }
  }

  return (
    <div>
      <Typography id="time-left" variant="h1">{minutes}:{addPreceedingZero(seconds)}{seconds}</Typography>
    </div>
  );
}

export default Timer;
