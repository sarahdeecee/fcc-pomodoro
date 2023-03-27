import { Typography } from '@mui/material';

function Timer(props: any) {
  const {timeLeft} = props;
  const {minutes, seconds} = timeLeft;
  const addPreceedingZero = (num: number): number | null => {
    if (num < 10) {
      return 0;
    } else {
      return null;
    }
  }

  return (
    <div>
      <Typography id="time-left" variant="h1">{addPreceedingZero(minutes)}{minutes}:{addPreceedingZero(seconds)}{seconds}</Typography>
    </div>
  );
}

export default Timer;
