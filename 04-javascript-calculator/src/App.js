import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import DecimalButton from './components/buttons/Decimal';
import EqualsButton from './components/buttons/Equals';
import NumberButton from './components/buttons/Number';
import OperatorButton from './components/buttons/Operator';

function App() {
  // const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
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
  const createNumberButtons = (numberArray, columns) => {
    const colspan = columns * 4;
    return numberArray.map(num => <Col xs={colspan}><NumberButton value={num} /></Col>)
  }
  const createButton = () => {
    return <Col><DecimalButton /></Col>
  }
  const numberButtonsRow1 = createNumberButtons(numbers.filter(num => (num.char >= 7)), 1);
  const numberButtonsRow2 = createNumberButtons(numbers.filter(num => (num.char <= 6 && num.char >= 4)), 1);
  const numberButtonsRow3 = createNumberButtons(numbers.filter(num => (num.char <= 3 && num.char >= 1)), 1);
  const numberButtonsRow4 = createNumberButtons(numbers.filter(num => (num.char == 0)), 2);
  const decimalButton = createButton(['.']);
  const operatorButtons = operators.map(operator => <OperatorButton operator={operator} />)
  
  return (
    <Container>
      {/* <EqualsButton /> */}
      <Row xs="auto">{numberButtonsRow1}</Row>
      <Row xs="auto">{numberButtonsRow2}</Row>
      <Row xs="auto">{numberButtonsRow3}</Row>
      <Row xs="auto">{numberButtonsRow4}{decimalButton}</Row>
      {/* {operatorButtons} */}
    </Container>
  );
}

export default App;
