import './App.css';
import { Button } from '@mui/material';
import Modifier from './components/Modifier';

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
  const modifiers = lengthValues.map(length => <Modifier type={length.type} minutes={length.minutes} />)
  return (
    <div className="App">
      {modifiers}
      <Button id="timer-label">Session</Button>
      <Button id="time-left">25:00</Button>
      <Button id="start_stop"></Button>
      <Button id="reset"></Button>
    </div>
  );
}

export default App;
