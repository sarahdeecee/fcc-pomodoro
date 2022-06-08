import { Grid } from "@mui/material";
import DrumPad from "./DrumPad";

function DrumMachine(props) {
  const samples = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  const drumPads = samples.map(sample => 
    <Grid item xs={4} key={sample}>
      <DrumPad key={sample} sample={sample} />
    </Grid>
  );
  return (
    <div className="DrumMachine">
      <Grid container>
        {drumPads}
      </Grid>
    </div>
  );
}

export default DrumMachine;