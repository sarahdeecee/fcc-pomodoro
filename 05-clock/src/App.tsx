import React from 'react';
import './App.css';
import { Box, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div id="break-label"></div>
      <div id="session-label"></div>
      <Button id="break-decrement"></Button>
      <Button id="session-decrement"></Button>
      <Button id="break-increment"></Button>
      <Button id="session-increment"></Button>
      <Button id="break-length">5</Button>
      <Button id="session-length">25</Button>
      <Button id="timer-length">Session</Button>
      <Button id="time-left">25:00</Button>
      <Button id="start_stop"></Button>
      <Button id="reset"></Button>
    </div>
  );
}

export default App;
