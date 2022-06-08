import { ImageList, ImageListItem } from "@mui/material";
import DrumPad from "./DrumPad";
import Display from "./Display";
import { useState } from "react";

function DrumMachine(props) {
  const [sample, setSample] = useState({});
  const samples = [
    { sound: 'wakuwaku',
      keypress: 'q', 
      file: '../../wakuwaku1.mp3',
      picture: '../../wakuwaku1.png'
    },
    { sound: 'ui',
      keypress: 'w', 
      file: '../../ui.mp3',
      picture: '../../ui.png'
    },
    { sound: 'bakudan bakudan',
      keypress: 'e', 
      file: '../../bakudanbakudan.mp3',
      picture: '../../bakudan.png'
    },
    { sound: 'peanuts',
      keypress: 'a', 
      file: '../../peanuts.mp3',
      picture: '../../peanuts.png'
    },
    { sound: 'wakuwaku',
      keypress: 's', 
      file: '../../wakuwaku2.mp3',
      picture: '../../wakuwaku2.png'
    }
  ];
  
  function playAudio(url) {
    new Audio(url).play();
  }

  const handleKeyPress = e => {
    console.log(e.key);
    const filteredSample = samples.filter(sample => sample.keypress.toLowerCase() === e.key)[0];
    if (filteredSample) {
      setSample(filteredSample);
      playAudio(filteredSample.file);
    }
  }

  const drumPads = samples.map(sample => 
      <ImageListItem key={sample.sound}>
        <DrumPad
          key={sample.sound}
          {...sample} 
          playAudio={playAudio}
          setSample={setSample}
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