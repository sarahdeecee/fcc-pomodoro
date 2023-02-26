import { Button } from "react-bootstrap";

function DecimalButton(props) {
  const {currentValue, setCurrentValue} = props;

  // Account for new number from previous total

  const isDisplayEmpty = (currentValue.display === '0');
  const isDisplayOperator = (currentValue.display === '+' || currentValue.display === '-' || currentValue.display === 'x'  || currentValue.display === '/');

  const handleDecimal = () => {
    if (!currentValue.display.toString().includes('.')) { // Allow only 1 decimal
      let newNumber = (isDisplayEmpty || isDisplayOperator) ? '0.' : `${currentValue.display}.`;
      let newExpression = (isDisplayEmpty || isDisplayOperator) ? `${currentValue.expression}0.` : `${currentValue.expression}.`;
      if (currentValue.reset && isDisplayEmpty()) {
        setCurrentValue({...currentValue, reset: false})
        newNumber = '0.';
        newExpression = '0.';
      }
      setCurrentValue({...currentValue, expression: newExpression, display: newNumber});
    }
  }

  return (
    <div className="button decimal-button">
      <Button variant="primary" onClick={handleDecimal} id="decimal">
        .
      </Button>
    </div>
  );
}

export default DecimalButton;