import { Button } from "react-bootstrap";

function DecimalButton(props) {
  const {currentValue, setCurrentValue} = props;

  const handleDecimal = () => {
    console.log('add decimal');
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