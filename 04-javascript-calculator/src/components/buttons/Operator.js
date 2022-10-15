import { Button } from "react-bootstrap";

function OperatorButton(props) {
  const { value } = props;
  return (
    <div className="button operator-button" id={value.word}>
      <Button>
        {value.char}
      </Button>
    </div>
  );
}

export default OperatorButton;