import { Button } from "react-bootstrap";

function OperatorButton(props) {
  const { operator, currentValue, setCurrentValue } = props;
  const handleOperator = () => {
    const lastCharacterOfExpression = currentValue.expression[currentValue.expression.length - 1];
    const secondLastCharacterOfExpression = currentValue.expression[currentValue.expression.length - 2];

    // const endsWithOperator = (lastCharacterOfExpression === '+')
    //   || (lastCharacterOfExpression === '-')
    const isPlusMinus = char => char === '+' || char === '-';
    const isTimesDivide = char => char === 'x' || char === `/`;

    // If expression exists
    if (currentValue.expression) {
      // If expression ends in times or isTimesDivide, allow positive or negative to be added
      if (isTimesDivide(lastCharacterOfExpression)) {
        if (operator.char === '-') {
          // Add character
          const newExpression = `${currentValue.expression}${operator.char}`;
          setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
        } else {
          const newExpression = currentValue.expression.slice(0,-1) + operator.char;
          setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
        }
      } else if (isPlusMinus(lastCharacterOfExpression)) {
        if (isTimesDivide(secondLastCharacterOfExpression)) {
          if (operator.char === '+') {
            const newExpression = currentValue.expression.slice(0,-1);
            setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})  
          }
        } else {
          const newExpression = `${currentValue.expression.slice(0,-1)}${operator.char}`;
          setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
        }
      } else {
      // If expression ends in a number, add operator
        const newExpression = `${currentValue.expression}${operator.char}`;
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