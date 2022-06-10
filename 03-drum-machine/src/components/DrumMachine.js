import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import DrumPad from "./DrumPad";
import Display from "./Display";

function DrumMachine(props) {
  const {sample, setSample, playAudio, samples, theme, showTransition, setShowTransition} = props;
  
  const drumPads = samples.map(sample => 
      <ImageListItem key={sample.english} className="drum-pad">
        <DrumPad
          key={`pad-${sample.keypress}`}
          {...sample} 
          playAudio={playAudio}
          setSample={setSample}
          showTransition={showTransition}
          setShowTransition={setShowTransition}
        />
        <ImageListItemBar
          key={`bar-${sample.english}`}
          title={sample[theme.language]}
          position='below'
          className="drum-action"
        />
      </ImageListItem>
  );
  return (
    <div className="DrumMachine" tabIndex={0}>
      <Display {...sample} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
      <ImageList cols={4}>
        {drumPads}
      </ImageList>
    </div>
  );
}

export default DrumMachine;