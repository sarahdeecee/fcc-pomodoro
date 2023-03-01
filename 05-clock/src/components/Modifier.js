import { Button } from '@mui/material';

function Modifier(props) {
  const {type, minutes} = props;
  const capitalizedType = type[0].toUpperCase() + type.slice(1,type.length);

  return (
    <div>
      <div id={`${capitalizedType}-label`}>{capitalizedType} Length</div>
      <Button id={`${capitalizedType}-increment`}>Up</Button>
      <Button id={`${capitalizedType}-length`}>{minutes}</Button>
      <Button id={`${capitalizedType}-decrement`}>Down</Button>
    </div>
  );
}

export default Modifier;
