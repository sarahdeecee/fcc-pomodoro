import { Button } from "react-bootstrap";

function NumberButton(props) {
  const { number, currentValue, setCurrentValue, maxDigits } = props;

  const displayEndsInNumber = (currentValue.display === '0' || currentValue.display === '+' || currentValue.display === '-' || currentValue.display === 'x'  || currentValue.display === '/');
  
  const handleNumber = () => {
    let newNumber = displayEndsInNumber ? number.char : 
      currentValue.display.length < maxDigits ? `${currentValue.display}${number.char}` : currentValue.display;
    let newExpression = (currentValue.display === '0') ? number.char : `${currentValue.expression}${number.char}`;
    if (currentValue.reset) {
      console.log('test');
      newNumber = number.char;
      newExpression = number.char;
      setCurrentValue({...currentValue, expression: newExpression, number: newNumber, display: newNumber, reset: false});
    } else if (currentValue.display.length < maxDigits) {
      setCurrentValue({...currentValue, expression: newExpression, number: newNumber, display: newNumber});
    }
  };

  return (
    <div className="button number-button">
      <Button variant="primary" onClick={handleNumber} id={number.word}>
        {number.char}
      </Button>
    </div>
  );
}

export default NumberButton;