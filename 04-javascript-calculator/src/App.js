import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ClearButton from './components/buttons/Clear';
import DecimalButton from './components/buttons/Decimal';
import EqualsButton from './components/buttons/Equals';
import NumberButton from './components/buttons/Number';
import OperatorButton from './components/buttons/Operator';
import Display from './components/Display';
import { numbers, operators, maxDigits } from './Values';

function App() {
  const [currentValue, setCurrentValue] = useState({
    expression: '',
    number: '',
    operator: '',
    display: '0',
    reset: false
  });
  
  const createNumberButtons = (numberArray, colspan) => {
    return numberArray.map(num => <Col xs={colspan}><NumberButton number={num} currentValue={currentValue} setCurrentValue={setCurrentValue} maxDigits={maxDigits} /></Col>)
  }
  const createOperatorButton = operatorObject => {
    return <Col><OperatorButton operator={operatorObject} currentValue={currentValue} setCurrentValue={setCurrentValue} /></Col>
  }
  const createDecimalButton = () => {
    return <Col><DecimalButton currentValue={currentValue} setCurrentValue={setCurrentValue} /></Col>
  }
  const createClearButton = () => {
    return <Col xs="6"><ClearButton setCurrentValue={setCurrentValue} /></Col>
  }
  const numberButtons7to9 = createNumberButtons(numbers.filter(num => (parseInt(num.char) >= 7)), 3);
  const numberButtons4to6 = createNumberButtons(numbers.filter(num => (parseInt(num.char) <= 6 && parseInt(num.char) >= 4)), 3);
  const numberButtons1to3 = createNumberButtons(numbers.filter(num => (parseInt(num.char) <= 3 && parseInt(num.char) >= 1)), 4);
  const numberButton0 = createNumberButtons(numbers.filter(num => (parseInt(num.char) === 0)), 8);
  const decimalButton = createDecimalButton();
  const clearButton = createClearButton();
  const addButton = createOperatorButton(operators.find(operator => operator.word === 'add'));
  const subtractButton = createOperatorButton(operators.find(operator => operator.word === 'subtract'));
  const multiplyButton = createOperatorButton(operators.find(operator => operator.word === 'multiply'));
  const divideButton = createOperatorButton(operators.find(operator => operator.word === 'divide'));
  
  return (
    <div xs={12} className="App">
      <Container id="calculator">
        <Row xs={12}><Display currentValue={currentValue} /></Row>
        <Row>{clearButton}{divideButton}{multiplyButton}</Row>
        <Row>{numberButtons7to9}{subtractButton}</Row>
        <Row>{numberButtons4to6}{addButton}</Row>
        <Row>
          <Col xs="9">
              <Row>{numberButtons1to3}</Row>
              <Row>{numberButton0}{decimalButton}</Row>
          </Col>
          <Col xs="3">
            <EqualsButton currentValue={currentValue} setCurrentValue={setCurrentValue} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
