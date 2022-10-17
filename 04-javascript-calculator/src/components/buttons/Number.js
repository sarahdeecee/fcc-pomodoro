import { Button } from "react-bootstrap";

function NumberButton(props) {
  const { number, currentValue, setCurrentValue } = props;
  const handleNumber = () => {
    const newNumber = currentValue.number + number.char;
    const newExpression = !currentValue.reset ? `${currentValue.expression}${number.char.toString()}` : number.char.toString();
    setCurrentValue({...currentValue, expression: newExpression, number: newNumber, display: newNumber.toString(), reset: false});
  };

  return (
    <div className="button number-button" id={number.word}>
      <Button variant="primary" onClick={handleNumber}>
        {number.char}
      </Button>
    </div>
  );
}

export default NumberButton;