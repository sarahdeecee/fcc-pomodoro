import { Button } from "react-bootstrap";

function NumberButton(props) {
  const { number, currentValue, setCurrentValue } = props;
  const handleNumber = () => {
    const newTotal = currentValue.total * 10 + number.char;
    setCurrentValue({...currentValue, total: newTotal, display: newTotal});
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