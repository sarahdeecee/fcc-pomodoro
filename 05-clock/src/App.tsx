import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import Modifier from './components/Modifier';
import Controls from './components/Controls';
import Timer from './components/Timer';
import { useState } from 'react';

const lengthValues = [
  {
    type: "break",
    minutes: 5,
  },
  {
    type: "session",
    minutes: 25
  }
]

function App() {
  const [play, setPlay] = useState(true);

  const modifiers = lengthValues.map(length => 
    <Grid item>
      <Modifier type={length.type} minutes={length.minutes} />
    </Grid>)

  return (
    <div className="App">
      <Grid container justifyContent="center">
        {modifiers}
      </Grid>
      <Typography id="timer-label" variant="h4">Session</Typography>
      <Timer />
      <Controls play={play} setPlay={setPlay} />
    </div>
  );
}

export default App;
