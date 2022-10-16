import { Button } from "react-bootstrap";

function OperatorButton(props) {
  const { operator, currentValue, setCurrentValue } = props;
  const handleOperator = () => {
    setCurrentValue({total: currentValue.temp, temp: 0, display: operator.char, operator: operator.char})
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