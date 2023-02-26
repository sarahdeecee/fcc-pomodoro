import { Button } from "react-bootstrap";

function DecimalButton(props) {
  const {currentValue, setCurrentValue} = props;

  // Account for new number from previous total

  const isDisplayEmpty = () => {
    return (currentValue === '0');
  }
  const isDisplayOperator = () => {
    return (currentValue.display === '+' || currentValue.display === '-' || currentValue.display === 'x'  || currentValue.display === '/');
  }

  const handleDecimal = () => {
    console.log('display ',currentValue.display);
    console.log('reset? ', currentValue.reset)
    let newExpression = ((currentValue.display).toString().includes('.')) ? currentValue.expression
      : (isDisplayEmpty || isDisplayOperator) ? `${currentValue.expression}0.` : `${currentValue.expression}.`;
    let newNumber = ((currentValue.display).toString().includes('.')) ? currentValue.display
      : (isDisplayEmpty || isDisplayOperator) ? '0.' : `${currentValue.display}.`;
    if (currentValue.reset && isDisplayEmpty()) {
      setCurrentValue({...currentValue, reset: false})
      newNumber = '0.';
      newExpression = '0.';
    }
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