import { Grid, Typography } from "@mui/material";
import DrumPad from "./DrumPad";
import Display from "./Display";

function DrumMachine(props) {
  const {sample, setSample, playAudio, samples, theme, showTransition, setShowTransition} = props;
  
  const drumPads = samples.map(sample => 
      <Grid container item
        wrap="nowrap"
        direction="column"
        xs={6} sm={4} md={3} 
        key={sample.english}
        className="drum-pad">
        <Grid item xs>
          <DrumPad
            key={`pad-${sample.keypress}`}
            {...sample} 
            playAudio={playAudio}
            setSample={setSample}
            showTransition={showTransition}
            setShowTransition={setShowTransition}
          />
        </Grid>
        <Grid item xs={12} sx={{maxWidth: '200px', overflow: "hidden", textOverflow: "ellipsis"}}>
          <Typography
            key={`bar-${sample.english}`}
            variant="p"
            className="drum-action"
            noWrap
          >{sample[theme.language]}
          </Typography>
        </Grid>
      </Grid>
  );
  return (
    <div className="drum-machine" tabIndex={0}>
      <Display {...sample} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
      <Grid container spacing={{xs: 1, sm: 2}}>
        {drumPads}
      </Grid>
    </div>
  );
}

export default DrumMachine;