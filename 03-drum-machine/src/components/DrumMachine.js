import { ImageList, ImageListItem, ImageListItemBar, IconButton, Avatar } from "@mui/material";
import DrumPad from "./DrumPad";
import Display from "./Display";

function DrumMachine(props) {
  const {sample, setSample, playAudio, samples, handleKeyPress} = props;
  
  const drumPads = samples.map(sample => 
      <ImageListItem key={sample.sound} className="drum-pad">
        <DrumPad
          key={sample.sound}
          {...sample} 
          playAudio={playAudio}
          setSample={setSample}
        />
        <ImageListItemBar
          title={sample.sound}
          position='below'
          className="drum-action"
        />
      </ImageListItem>
  );
  return (
    <div className="DrumMachine" onKeyDown={handleKeyPress} tabIndex={0}>
      <Display sample={sample} />
      <ImageList cols={3}>
        {drumPads}
      </ImageList>
    </div>
  );
}

export default DrumMachine;