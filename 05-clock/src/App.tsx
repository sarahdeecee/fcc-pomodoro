import './App.css';
import { Button } from '@mui/material';
import Modifier from './components/Modifier';
import Controls from './components/Controls';

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
      <Controls />
    </div>
  );
}

export default App;
