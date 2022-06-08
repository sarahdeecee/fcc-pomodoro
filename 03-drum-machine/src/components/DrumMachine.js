import { ImageList, ImageListItem} from "@mui/material";
import DrumPad from "./DrumPad";

function DrumMachine(props) {
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
    <div className="DrumMachine">
      <ImageList cols={3}>
        {drumPads}
      </ImageList>
    </div>
  );
}

export default DrumMachine;