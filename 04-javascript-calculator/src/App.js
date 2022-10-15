import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ClearButton from './components/buttons/Clear';
import DecimalButton from './components/buttons/Decimal';
import EqualsButton from './components/buttons/Equals';
import NumberButton from './components/buttons/Number';
import OperatorButton from './components/buttons/Operator';
import Display from './components/Display';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const numbers = [
    {
      word: 'zero',
      char: 0, 
    },
    {
      word: 'one',
      char: 1, 
    },
    {
      word: 'two',
      char: 2, 
    },
    {
      word: 'three',
      char: 3, 
    },
    {
      word: 'four',
      char: 4, 
    },
    {
      word: 'five',
      char: 5, 
    },
    {
      word: 'six',
      char: 6, 
    },
    {
      word: 'seven',
      char: 7, 
    },
    {
      word: 'eight',
      char: 8, 
    },
    {
      word: 'nine',
      char: 9
    }
  ];
  const operators = [
    {
      word: 'add',
      char: '+'
    }, 
    {
      word: 'subtract',
      char: '-'
    },
    {
      word: 'multiply',
      char: 'x'
    },
    {
      word: 'divide',
      char: '/'
    }
  ];
  const createNumberButtons = (numberArray, colspan) => {
    return numberArray.map(num => <Col xs={colspan}><NumberButton value={num} /></Col>)
  }
  const createOperatorButton = operatorObject => {
    return <Col><OperatorButton value={operatorObject} /></Col>
  }
  const createDecimalButton = () => {
    return <Col><DecimalButton /></Col>
  }
  const createEqualsButton = () => {
    return <Col><EqualsButton /></Col>
  }
  const createClearButton = () => {
    return <Col xs="6"><ClearButton /></Col>
  }
  const numberButtons7to9 = createNumberButtons(numbers.filter(num => (num.char >= 7)), 3);
  const numberButtons4to6 = createNumberButtons(numbers.filter(num => (num.char <= 6 && num.char >= 4)), 3);
  const numberButtons1to3 = createNumberButtons(numbers.filter(num => (num.char <= 3 && num.char >= 1)), 4);
  const numberButton0 = createNumberButtons(numbers.filter(num => (num.char == 0)), 8);
  const decimalButton = createDecimalButton();
  const clearButton = createClearButton();
  const equalsButton = createEqualsButton();
  const addButton = createOperatorButton(operators.find(operator => operator.word === 'add'));
  const subtractButton = createOperatorButton(operators.find(operator => operator.word === 'subtract'));
  const multiplyButton = createOperatorButton(operators.find(operator => operator.word === 'multiply'));
  const divideButton = createOperatorButton(operators.find(operator => operator.word === 'divide'));
  
  return (
    <Container xs={12} className="App">
      <Row><Display currentValue={currentValue} /></Row>
      <Row>{clearButton}{divideButton}{multiplyButton}</Row>
      <Row>{numberButtons7to9}{subtractButton}</Row>
      <Row>{numberButtons4to6}{addButton}</Row>
      <Row>
        <Col xs="9">
            <Row>{numberButtons1to3}</Row>
            <Row>{numberButton0}{decimalButton}</Row>
        </Col>
        <Col xs="3">
          <EqualsButton />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
