import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import EqualsButton from './components/buttons/Equals';
import NumberButton from './components/buttons/Number';
import OperatorButton from './components/buttons/Operator';

function App() {
  // const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numbers = [
    { word: 'one',
      char: 1, 
    },
    { word: 'two',
      char: 2, 
    },
    { word: 'three',
      char: 3, 
    },
    { word: 'four',
      char: 4, 
    },
    { word: 'five',
      char: 5, 
    },
    { word: 'six',
      char: 6, 
    },
    { word: 'seven',
      char: 7, 
    },
    { word: 'eight',
      char: 8, 
    },
    { word: 'nine',
      char: 9
    }
  ];
  const operators = ['add', 'subtract', 'multiply', 'divide'];
  const createButtons = numberArray => {
    return numberArray.map(num => <Col><NumberButton value={num} /></Col>)
  }
  const numberButtonsRow1 = createButtons(numbers.filter(num => (num.char >= 7)));
  const numberButtonsRow2 = createButtons(numbers.filter(num => (num.char <= 6 && num.char >= 4)))
  const numberButtonsRow3 = createButtons(numbers.filter(num => (num.char <= 3)))
  const operatorButtons = operators.map(operator => <OperatorButton operator={operator} />)
  
  return (
    <Container>
      {/* <EqualsButton /> */}
      <Row xs="auto">{numberButtonsRow1}</Row>
      <Row xs="auto">{numberButtonsRow2}</Row>
      <Row xs="auto">{numberButtonsRow3}</Row>
      {/* {operatorButtons} */}
    </Container>
  );
}

export default App;
