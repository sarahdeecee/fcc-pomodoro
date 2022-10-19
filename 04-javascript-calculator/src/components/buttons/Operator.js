import { Button } from "react-bootstrap";

function OperatorButton(props) {
  const { operator, currentValue, setCurrentValue } = props;
  const handleOperator = () => {
    const lastCharacterOfExpression = currentValue.expression[currentValue.expression.length - 1];
    const secondLastCharacterOfExpression = currentValue.expression[currentValue.expression.length - 2];

    const isPlusMinus = char => char === '+' || char === '-';
    const isTimesDivide = char => char === 'x' || char === `/`;

    const addChar = currentValue.reset ? currentValue.display + operator.char : currentValue.expression + operator.char;
    const removeLastChar = currentValue.reset ? currentValue.display : currentValue.expression.slice(0,-1);
    const replaceLastChar = currentValue.reset ? operator.char : currentValue.expression.slice(0,-1) + operator.char;
    
    // If expression exists
    if (currentValue.expression) {
      // If reset === true, change expression to previous total (currentValue.number)
      if (currentValue.reset) {
        setCurrentValue({...currentValue, reset: false})
      }
      // If expression ends in times or isTimesDivide, allow negative sign to be added
      if (isTimesDivide(lastCharacterOfExpression)) {
        if (operator.char === '-') {
          // Add negative sign
          const newExpression = addChar;
          setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
        } else { // Otherwise replace operator 
          const newExpression = replaceLastChar;
          setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
        }
      // If expression ends in + or -, toggle sign or replace operator
      } else if (isPlusMinus(lastCharacterOfExpression)) {
        // If negative, change sign to positive
        if (isTimesDivide(secondLastCharacterOfExpression)) {
          if (operator.char === '+') {
            const newExpression = removeLastChar;
            setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})  
          }
        // If + or - is an operator, replace operator
        } else {
          const newExpression = replaceLastChar;
          setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
        }
      // If expression ends in a number, add operator
      } else if (Number.isInteger(parseInt(lastCharacterOfExpression))) {
        const newExpression = addChar;
        setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
      }
    }
  };

  return (
    <div className="button operator-button" id={operator.word}>
      <Button variant="secondary" onClick={handleOperator}>
        {operator.char}
      </Button>
    </div>
  );
}

export default OperatorButton;