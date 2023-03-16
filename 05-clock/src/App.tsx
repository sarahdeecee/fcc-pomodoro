import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import Modifier from './components/Modifier';
import Controls from './components/Controls';
import Timer from './components/Timer';
import { useEffect, useState } from 'react';

interface Session {
  type: string,
  minutes: number,
  seconds: number,
  set?: boolean
}

const lengthValues: Session[] = [
  {
    type: "break",
    minutes: 5,
    seconds: 0,
  },
  {
    type: "session",
    minutes: 25,
    seconds: 0
  }
]

function App() {
  const [play, setPlay] = useState<Boolean>(false);
  const [timeLeft, setTimeLeft] = useState<Session | undefined>(lengthValues[1]);
  const [session, setSession] = useState<{break: Session, session: Session}>({
    break: {
      type: "break",
      minutes: 5,
      seconds: 0,
      set: false
    },
    session: {
      type: "session",
      minutes: 25,
      seconds: 0,
      set: true
    }
  })

  const calculateTimeLeft = (currentTime: Session | undefined) => {
    if (currentTime === undefined) {
      return undefined;
    }
    if (play && currentTime) {
      if (currentTime.seconds === 0) {
        if (currentTime.minutes === 0) {
        } else {
          return {...currentTime, minutes: currentTime.minutes - 1, seconds: 59};
        }
        setPlay(false);
        return {...currentTime, minutes: 0, seconds: 0};
      } else {
        return {...currentTime, seconds: currentTime.seconds - 1};
      }
    }
    return undefined;
  };

  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(timeLeft));
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  const modifiers = lengthValues.map(length => 
    <Grid item>
      <Modifier type={length.type} minutes={length.minutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
    </Grid>)

  return (
    <Grid container alignItems="center" justifyContent="center" className="App">
      <Grid container justifyContent="center">
        {modifiers}
      </Grid>
      <Grid item>
        <Typography id="timer-label" variant="h4">Session</Typography>
        <Timer timeLeft={timeLeft} />
        <Controls play={play} setPlay={setPlay} timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      </Grid>
    </Grid>
  );
}

export default App;
