import './App.css';
import DrumMachine from './components/DrumMachine';
import { useState } from "react";

function App() {
  const [sample, setSample] = useState({});
  function playAudio(url) {
    new Audio(url).play();
  }

  const handleKeyPress = e => {
    const filteredSample = samples.filter(sample => sample.keypress.toLowerCase() === e.key)[0];
    if (filteredSample) {
      setSample(filteredSample);
      playAudio(filteredSample.file);
    }
  }

  const samples = [
    { sound: 'wakuwaku...!',
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
    { sound: 'wa~kuwaku',
      keypress: 's', 
      file: '../../wakuwaku2.mp3',
      picture: '../../wakuwaku2.png'
    },
    { sound: 'WAKUWAKU',
      keypress: 'd', 
      file: '../../wakuwaku3.mp3',
      picture: '../../wakuwaku3.png'
    },
    { sound: 'aa',
      keypress: 'z', 
      file: '../../aa.mp3',
      picture: '../../aa.png'
    },
    { sound: 'anya, haha inakute samishii',
      keypress: 'x', 
      file: '../../hahainakutesamishii.mp3',
      picture: '../../hahainakutesamishii.png'
    },
    { sound: 'haha no sonzai koishii',
      keypress: 'c', 
      file: '../../hahanosonzaikoishii.mp3',
      picture: '../../hahanosonzaikoishii.png'
    }
  ];

  return (
    <div className="App">
      <DrumMachine sample={sample} setSample={setSample} samples={samples} playAudio={playAudio} handleKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
