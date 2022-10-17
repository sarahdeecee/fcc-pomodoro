import { Button } from "react-bootstrap";

function EqualsButton(props) {
  const {currentValue, setCurrentValue} = props;
  const expression = currentValue.expression;

  const handleExpression = () => {
    const total = 0;
    const totalExpression = `${currentValue.expression}=${total}`;
    setCurrentValue({...currentValue, display: total, expression: totalExpression, number: '', operator: '', reset: true});
  }
  return (
    <div className="button equals-button" id="equals">
      <Button variant="secondary" onClick={handleExpression}>
        =
      </Button>
    </div>
  );
}

export default EqualsButton;