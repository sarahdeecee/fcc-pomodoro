import { Button } from "react-bootstrap";

function ClearButton(props) {
  const {setCurrentValue} = props;
  const handleClear = () => {
    setCurrentValue({total: 0, display: 0, operator: null});
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