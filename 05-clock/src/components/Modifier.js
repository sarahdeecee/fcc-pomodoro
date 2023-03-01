import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div>
      <div id="break-label">Break Length</div>
      <Button id="break-decrement">Down</Button>
      <Button id="break-length">5</Button>
      <Button id="break-increment">Up</Button>
    </div>
  );
}

export default App;
