import { Button } from "react-bootstrap";

function DecimalButton(props) {
  const {currentValue, setCurrentValue} = props;

  // Account for new number from previous total
  if (currentValue.reset) {
    setCurrentValue({...currentValue, reset: false})
  }

  const isDisplayEmpty = () => {
    return (currentValue === '0');
  }
  const isDisplayOperator = () => {
    return (currentValue.display === '+' || currentValue.display === '-' || currentValue.display === 'x'  || currentValue.display === '/');
  }

  const handleDecimal = () => {
    const newExpression = ((currentValue.display).includes('.')) ? currentValue.expression
      : (isDisplayEmpty || isDisplayOperator) ? `${currentValue.expression}0.` : `${currentValue.expression}.`;
    const newNumber = ((currentValue.display).includes('.')) ? currentValue.display
      : (isDisplayEmpty || isDisplayOperator) ? '0.' : `${currentValue.display}.`;
    setCurrentValue({...currentValue, expression: newExpression, display: newNumber});
  }

  return (
    <div className="button decimal-button" id="decimal">
      <Button variant="primary" onClick={handleDecimal}>
        .
      </Button>
    </div>
  );
}

export default DecimalButton;