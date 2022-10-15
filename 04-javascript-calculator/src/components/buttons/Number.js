import { Button } from "react-bootstrap";

function NumberButton(props) {
  const { value } = props;
  return (
    <div className="button number-button" id={value.word}>
      <Button>
        {value.char}
      </Button>
    </div>
  );
}

export default NumberButton;