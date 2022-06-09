import './App.css';
import DrumMachine from './components/DrumMachine';
import { useState } from "react";

function App() {
  const [sample, setSample] = useState({});
  function playAudio(url) {
    new Audio(url).play();
  }

  const samples = [
    { sound: 'wakuwaku...!',
      japanese: 'ワクワク...!',
      keypress: 'q', 
      file: '../../wakuwaku1.mp3',
      picture: '../../wakuwaku1.png'
    },
    { sound: 'ui',
      japanese: 'うい',
      keypress: 'w', 
      file: '../../ui.mp3',
      picture: '../../ui.png'
    },
    { sound: 'bakudan bakudan',
      japanese: '爆弾、爆弾！',
      keypress: 'e', 
      file: '../../bakudanbakudan.mp3',
      picture: '../../bakudan.png'
    },
    { sound: 'peanuts',
      japanese: 'ピーナッツ！',
      keypress: 'a', 
      file: '../../peanuts.mp3',
      picture: '../../peanuts.png'
    },
    { sound: 'wa~kuwaku',
      japanese: 'ワ〜クワク',
      keypress: 's', 
      file: '../../wakuwaku2.mp3',
      picture: '../../wakuwaku2.png'
    },
    { sound: 'WAKUWAKU',
      japanese: 'ワクワク！！',
      keypress: 'd', 
      file: '../../wakuwaku3.mp3',
      picture: '../../wakuwaku3.png'
    },
    { sound: 'aa',
      japanese: 'あ〜',
      keypress: 'z', 
      file: '../../aa.mp3',
      picture: '../../aa.png'
    },
    { sound: 'anya, haha inakute samishii',
      japanese: 'アーニャ、母いなくて寂しい',
      keypress: 'x', 
      file: '../../hahainakutesamishii.mp3',
      picture: '../../hahainakutesamishii.png'
    },
    { sound: 'haha no sonzai koishii',
      japanese: '母の存在恋しい',
      keypress: 'c', 
      file: '../../hahanosonzaikoishii.mp3',
      picture: '../../hahanosonzaikoishii.png'
    }
  ];

  const handleKeyPress = e => {
    const filteredSample = samples.find(sample => sample.keypress.toLowerCase() === e.key);
    if (filteredSample) {
      setSample(filteredSample);
      playAudio(filteredSample.file);
    }
  }

  return (
    <div className="App" onKeyDown={handleKeyPress}>
      <DrumMachine sample={sample} setSample={setSample} samples={samples} playAudio={playAudio} handleKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
