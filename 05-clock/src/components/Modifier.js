import { Button } from '@mui/material';

function Modifier(props) {
  const {type, minutes} = props;

  return (
    <div>
      <div id={`${type}-label`}>{type} Length</div>
      <Button id={`${type}-increment`}>Up</Button>
      <Button id={`${type}-length`}>{minutes}</Button>
      <Button id={`${type}-decrement`}>Down</Button>
    </div>
  );
}

export default Modifier;
