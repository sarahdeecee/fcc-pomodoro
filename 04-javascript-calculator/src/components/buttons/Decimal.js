import { Button } from "react-bootstrap";

function DecimalButton(props) {
  const {currentValue, setCurrentValue} = props;

  const handleDecimal = () => {
    console.log('add decimal ', currentValue.display);
    const newExpression = ((currentValue.display).includes('.')) ? currentValue.expression : `${currentValue.expression}.`;
    const newNumber = ((currentValue.display).includes('.')) ? currentValue.display : `${currentValue.display}.`;
    setCurrentValue({...currentValue, expression: newExpression, number: newNumber, display: newNumber});
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