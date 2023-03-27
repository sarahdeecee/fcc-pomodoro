import { Button, Grid, Typography } from '@mui/material';
import {ArrowUpward, ArrowDownward} from '@mui/icons-material';

function Modifier(props) {
  const {type, play, setPlay, timeLeft, setTimeLeft, session, setSession} = props;

  const minutes = session[type].minutes;
  const capitalizedType = type[0].toUpperCase() + type.slice(1,type.length);

  const handleLengthUp = () => {
    const minutesUp = minutes + 1;
    if (!play) {
      setSession({...session, [type]: {minutes: minutesUp, seconds: 0}});
      if (type === 'session') {
        setTimeLeft({...session[type], minutes: minutesUp})
      }
    }
  }
  
  const handleLengthDown = () => {
    const minutesDown = minutes - 1;
    if (minutes !== 1 && !play) {
      setSession({...session, [type]: {minutes: minutesDown, seconds: 0}})
      if (type === 'session') {
        setTimeLeft({...session[type], minutes: minutesDown})
      }
    }
  }

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography id={`${type}-label`} variant="h5">{capitalizedType} Length</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button id={`${type}-increment`} onClick={handleLengthUp}><ArrowUpward /></Button>
      </Grid>
      <Grid item xs={4}>
        <Typography id={`${type}-length`}>{minutes}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button id={`${type}-decrement`} onClick={handleLengthDown}><ArrowDownward /></Button>
      </Grid>
    </Grid>
  );
}

export default Modifier;
