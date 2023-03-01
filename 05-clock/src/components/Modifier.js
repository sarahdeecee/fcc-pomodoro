import { Button } from '@mui/material';
import {ArrowUpward, ArrowDownward} from '@mui/icons-material';

function Modifier(props) {
  const {type, minutes} = props;
  const capitalizedType = type[0].toUpperCase() + type.slice(1,type.length);

  return (
    <div>
      <div id={`${capitalizedType}-label`}>{capitalizedType} Length</div>
      <Button id={`${capitalizedType}-increment`}><ArrowUpward /></Button>
      <Button id={`${capitalizedType}-length`}>{minutes}</Button>
      <Button id={`${capitalizedType}-decrement`}><ArrowDownward /></Button>
    </div>
  );
}

export default Modifier;
