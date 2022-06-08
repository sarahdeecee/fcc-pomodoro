import { Button } from "@mui/material";

function DrumPad(props) {
  const {sample} = props;
  return (
    <Button onClick={() => console.log(sample)}>{sample}</Button>
  );
}

export default DrumPad;