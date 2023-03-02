import { Button } from '@mui/material';
import {ArrowUpward, ArrowDownward} from '@mui/icons-material';

function Modifier(props) {
  const {type, minutes} = props;
  const capitalizedType = type[0].toUpperCase() + type.slice(1,type.length);

  return (
    <div>
      <div id={`${type}-label`}>{capitalizedType} Length</div>
      <Button id={`${type}-increment`}><ArrowUpward /></Button>
      <Button id={`${type}-length`}>{minutes}</Button>
      <Button id={`${type}-decrement`}><ArrowDownward /></Button>
    </div>
  );
}

export default Modifier;
