import { Button } from "react-bootstrap";

function OperatorButton(props) {
  const { operator, currentValue, setCurrentValue } = props;
  const handleOperator = () => {
    const lastCharacterOfExpression = currentValue.expression[currentValue.expression.length - 1];
    const secondLastCharacterOfExpression = currentValue.expression[currentValue.expression.length - 2];

    const isPlusMinus = char => char === '+' || char === '-';
    const isTimesDivide = char => char === '*' || char === `/`;
    const isMinus = char => char === '-';
    const isOperator = char => char === '+' || char === '-' || char === '*' || char === '/';
    const endsInDecimal = char => char.endsWith('.');

    const addChar = currentValue.reset ? currentValue.number + operator.char : currentValue.expression + operator.char;
    const removeLastChar = currentValue.reset ? currentValue.number : currentValue.expression.slice(0,-1);
    const replaceLastChar = currentValue.reset ? operator.char : currentValue.expression.slice(0,-1) + operator.char;
    const replaceLastTwoChars = currentValue.reset ? operator.char : currentValue.expression.slice(0,-2) + operator.char;
    // If expression exists
    if (currentValue.expression) {
      // If reset === true, change expression to previous total (currentValue.number)
      if (currentValue.reset) {
        setCurrentValue({...currentValue, reset: false})
      }

      let newExpression = '';
      
      // If expression ends in a number, add operator
      if (Number.isInteger(parseInt(lastCharacterOfExpression))) {
        // If ends in decimal, remove decimal
        newExpression = endsInDecimal(lastCharacterOfExpression) ? replaceLastChar : addChar;
      } else if (isOperator(secondLastCharacterOfExpression)) {
        // If there are two operators, replace with new single operator
        newExpression = replaceLastTwoChars;
      } else if (!isMinus(lastCharacterOfExpression) && isMinus(operator.char)) {
        // If expression ends in non-negative sign, add negative sign to be added
        newExpression = addChar;
      } else { // Otherwise replace operator 
        newExpression = replaceLastChar;
      }
      setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
    }
  };

  return (
    <div className="button operator-button">
      <Button variant="secondary" onClick={handleOperator} id={operator.word}>
        {operator.char}
      </Button>
    </div>
  );
}

export default OperatorButton;