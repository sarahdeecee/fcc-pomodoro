import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import Modifier from './components/Modifier';
import Controls from './components/Controls';
import Timer from './components/Timer';
import { useEffect, useState } from 'react';

interface Session {
  minutes: number
  seconds: number
}

const defaultSessionLengths = {
  break: {
    minutes: 5,
    seconds: 0,
  },
  session: {
    minutes: 25,
    seconds: 0,
  }
}

function App() {
  const [play, setPlay] = useState<boolean>(false);
  const [type, setType] = useState<string>("session");
  const [session, setSession] = useState<{break: Session, session: Session}>(defaultSessionLengths)
  const [timeLeft, setTimeLeft] = useState<Session>(session.session);

  const calculateTimeLeft = (currentTime: Session) => {
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
  };

  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(timeLeft) ?? {minutes: 0, seconds: 0});
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  const modifiers = <>
    <Grid item>
      <Modifier type={"break"} timeLeft={timeLeft} setTimeLeft={setTimeLeft} session={session} setSession={setSession} />
    </Grid>
    <Grid item>
      <Modifier type={"session"} timeLeft={timeLeft} setTimeLeft={setTimeLeft} session={session} setSession={setSession} />
    </Grid>
  </>

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
