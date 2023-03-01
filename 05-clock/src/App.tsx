import './App.css';
import { Button } from '@mui/material';

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
  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <Button id="break-decrement">Up</Button>
      <Button id="session-decrement">Down</Button>
      <Button id="break-increment">Up</Button>
      <Button id="session-increment">Down</Button>
      <Button id="break-length">5</Button>
      <Button id="session-length">25</Button>
      <Button id="timer-label">Session</Button>
      <Button id="time-left">25:00</Button>
      <Button id="start_stop"></Button>
      <Button id="reset"></Button>
    </div>
  );
}

export default App;
