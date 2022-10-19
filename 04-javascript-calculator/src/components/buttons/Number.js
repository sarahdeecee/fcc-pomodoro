import { Button } from "react-bootstrap";

function NumberButton(props) {
  const { number, currentValue, setCurrentValue } = props;
  const handleNumber = () => {
    let newNumber = (currentValue.display === '0' || currentValue.display === '+' || currentValue.display === '-' || currentValue.display === 'x'  || currentValue.display === '/') ? number.char : `${currentValue.display}${number.char}`;
    let newExpression = (currentValue.display === '0') ? number.char : `${currentValue.expression}${number.char}`;
    if (currentValue.reset) {
      setCurrentValue({...currentValue, reset: false})
      newNumber = number.char;
      newExpression = number.char;
    }
    setCurrentValue({...currentValue, expression: newExpression, number: newNumber, display: newNumber});
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