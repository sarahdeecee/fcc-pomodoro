import { Button, Grid, Typography } from '@mui/material';
import {ArrowUpward, ArrowDownward} from '@mui/icons-material';

function Modifier(props) {
  const {type, minutes} = props;
  const capitalizedType = type[0].toUpperCase() + type.slice(1,type.length);

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography id={`${type}-label`} variant="h5">{capitalizedType} Length</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button id={`${type}-increment`}><ArrowUpward /></Button>
      </Grid>
      <Grid item xs={4}>
        <Typography id={`${type}-length`}>{minutes}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button id={`${type}-decrement`}><ArrowDownward /></Button>
      </Grid>
    </Grid>
  );
}

export default Modifier;
