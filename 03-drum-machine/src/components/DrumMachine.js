import { ImageList, ImageListItem, stepLabelClasses} from "@mui/material";
import DrumPad from "./DrumPad";
import {useState} from 'react';

function DrumMachine(props) {
  const [keyPress, setKeyPress] = useState('');
  const samples = [
    { sound: 'ui',
      keypress: 'Q', 
      file: '../../ui.mp3',
      picture: '../../ui.png'
    },
    { sound: 'bakudan bakudan',
      keypress: 'W', 
      file: '../../bakudanbakudan.mp3',
      picture: '../../bakudan.png'
    },
    { sound: 'peanuts',
      keypress: 'E', 
      file: '../../peanuts.mp3',
      picture: '../../peanuts.png'
    },
    { sound: 'wakuwaku',
      keypress: 'A', 
      file: '../../wakuwaku.mp3',
      picture: '../../wakuwaku2.png'
    }
  ];

  function playAudio(url) {
    new Audio(url).play();
  }

  const handleKeyPress = e => {
    console.log(e.key);
    const filteredSample = samples.filter(sample => sample.keypress.toLowerCase() === e.key)[0];
    playAudio(filteredSample.file);
  }

  const drumPads = samples.map(sample => 
      <ImageListItem key={sample.sound}>
        <DrumPad
          key={sample.sound}
          {...sample} 
          playAudio={playAudio}
        />
      </ImageListItem>
  );
  return (
    <div className="DrumMachine" onKeyDown={handleKeyPress} tabIndex={0}>
      <ImageList cols={3}>
        {drumPads}
      </ImageList>
    </div>
  );
}

export default DrumMachine;