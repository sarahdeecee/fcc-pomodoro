import { Button } from "react-bootstrap";

function ClearButton(props) {
  const {setCurrentValue} = props;
  const handleClear = () => {
    setCurrentValue({expression: '', number: '', display: '0', operator: '', reset: false});
  }
  return (
    <div className="button clear-button" id="clear">
      <Button variant="danger" onClick={handleClear}>
        AC
      </Button>
    </div>
  );
}

export default ClearButton;