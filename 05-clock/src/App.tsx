import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import Modifier from './components/Modifier';
import Controls from './components/Controls';
import Timer from './components/Timer';
import { useEffect, useState } from 'react';

interface Session {
  type: string,
  minutes: number,
  seconds: number
}

const lengthValues: Session[] = [
  {
    type: "break",
    minutes: 5,
    seconds: 0
  },
  {
    type: "session",
    minutes: 25,
    seconds: 0
  }
]

function App() {
  const [play, setPlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState<Session | undefined>(lengthValues[1]);

  const calculateTimeLeft = (): Session | undefined => {
    if (timeLeft === undefined) {
      return undefined;
    }
    if (play && timeLeft) {
      if (timeLeft.seconds === 0) {
        if (timeLeft.minutes === 0) {
        } else {
          return {...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59};
        }
        setPlay(false);
        return {...timeLeft, minutes: 0, seconds: 0};
      } else {
        return {...timeLeft, seconds: timeLeft.seconds - 1};
      }
    }
    return undefined;
  };

  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }
    // if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      
    // }
  });

  const modifiers = lengthValues.map(length => 
    <Grid item>
      <Modifier type={length.type} minutes={length.minutes} />
    </Grid>)

  return (
    <Grid container alignItems="center" justifyContent="center" className="App">
      <Grid container justifyContent="center">
        {modifiers}
      </Grid>
      <Grid item>
        <Typography id="timer-label" variant="h4">Session</Typography>
        <Timer />
        <Controls play={play} setPlay={setPlay} setTimeLeft={setTimeLeft} />
      </Grid>
    </Grid>
  );
}

export default App;
