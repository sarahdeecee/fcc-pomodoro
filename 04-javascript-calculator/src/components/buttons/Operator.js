import { Button } from "react-bootstrap";

function OperatorButton(props) {
  const { operator, currentValue, setCurrentValue } = props;
  const handleOperator = () => {
    const lastCharacterOfExpression = currentValue.expression[currentValue.expression.length - 1];
    const endsWithOperator = (lastCharacterOfExpression === '+')
      || (lastCharacterOfExpression === '-')
      || (lastCharacterOfExpression === 'x')
      || (lastCharacterOfExpression === '/');
    // let newExpression = '';
    // console.log(currentValue.expression, endsWithOperator);
    if (!endsWithOperator && currentValue.expression) {
      const newExpression = `${currentValue.expression}${operator.char}`;
      setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
    } else if (endsWithOperator) {
      // console.log(newExpression[currentValue.expression.length - 1]);
      console.log(currentValue.expression);
      const newExpression = currentValue.expression.slice(0,-1) + operator.char;
      console.log('change',newExpression);
      setCurrentValue({ ...currentValue, display: operator.char, operator: operator.char, expression: newExpression, number: '', reset: false})
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