import { Button } from "react-bootstrap";

function DecimalButton(props) {
  const {currentValue, setCurrentValue} = props;

  // Account for new number from previous total
  if (currentValue.reset) {
    setCurrentValue({...currentValue, reset: false})
  }

  const handleDecimal = () => {
    console.log('add decimal ', currentValue.display);
    const newExpression = ((currentValue.display).includes('.')) ? currentValue.expression
      : (currentValue.display === '0' || currentValue.display === '+' || currentValue.display === '-' || currentValue.display === 'x'  || currentValue.display === '/') ? `${currentValue.expression}0.` : `${currentValue.expression}.`;
    const newNumber = ((currentValue.display).includes('.')) ? currentValue.display
      : (currentValue.display === '0' || currentValue.display === '+' || currentValue.display === '-' || currentValue.display === 'x'  || currentValue.display === '/') ? '0.' : `${currentValue.display}.`;
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