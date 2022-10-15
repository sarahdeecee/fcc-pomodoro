import { Button } from "react-bootstrap";

function NumberButton(props) {
  const { number, currentValue, setCurrentValue } = props;
  const handleNumber = () => {
    setCurrentValue(currentValue * 10 + number.char);
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