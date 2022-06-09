import { ImageList, ImageListItem, ImageListItemBar, IconButton, Avatar } from "@mui/material";
import DrumPad from "./DrumPad";
import Display from "./Display";

function DrumMachine(props) {
  const {sample, setSample, playAudio, samples, handleKeyPress, theme} = props;
  
  const drumPads = samples.map(sample => 
      <ImageListItem key={sample.english} className="drum-pad">
        <DrumPad
          key={sample.keypress}
          {...sample} 
          playAudio={playAudio}
          setSample={setSample}
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
      <Display {...sample} theme={theme} />
      <ImageList cols={3}>
        {drumPads}
      </ImageList>
    </div>
  );
}

export default DrumMachine;