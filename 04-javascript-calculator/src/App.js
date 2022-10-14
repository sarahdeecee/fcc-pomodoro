import './App.css';
import EqualsButton from './buttons/Equals';
import NumberButton from './buttons/Number';
import OperatorButton from './buttons/Operator';

function App() {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const operators = ['add', 'subtract', 'multiply', 'divide'];
  
  const numberButtons = numbers.map(num => <NumberButton value={num} />)
  const operatorButtons = operators.map(operator => <OperatorButton operator={operator} />)
  
  return (
    <div className="App">
      <EqualsButton />
      {numberButtons}
      {operatorButtons}
    </div>
  );
}

export default App;
