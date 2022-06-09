import './App.css';
import DrumMachine from './components/DrumMachine';
import Menu from './components/Menu';
import { useState, useEffect } from "react";

function App() {
  const [sample, setSample] = useState({});
  const [theme, setTheme] = useState({
    mode: 'light',
    language: 'english'
  });

  function playAudio(url) {
    new Audio(url).play();
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyPress );

    return function cleanup() {
        window.removeEventListener('keydown', handleKeyPress );
    } 
  },[]);

  const samples = [
    { english: 'wakuwaku...!',
      japanese: 'ワクワク...!',
      keypress: 'q', 
      file: '../../wakuwaku1.mp3',
      picture: '../../wakuwaku1.png'
    },
    { english: 'ui',
      japanese: 'うい',
      keypress: 'w', 
      file: '../../ui.mp3',
      picture: '../../ui.png'
    },
    { english: 'bakudan bakudan!',
      japanese: '爆弾、爆弾！',
      keypress: 'e', 
      file: '../../bakudanbakudan.mp3',
      picture: '../../bakudan.png'
    },
    { english: 'Peanuts!',
      japanese: 'ピーナッツ！',
      keypress: 'a', 
      file: '../../peanuts.mp3',
      picture: '../../peanuts.png'
    },
    { english: 'wa~kuwaku',
      japanese: 'ワ〜クワク',
      keypress: 's', 
      file: '../../wakuwaku2.mp3',
      picture: '../../wakuwaku2.png'
    },
    { english: 'WAKUWAKU',
      japanese: 'ワクワク！！',
      keypress: 'd', 
      file: '../../wakuwaku3.mp3',
      picture: '../../wakuwaku3.png'
    },
    { english: 'Ah~',
      japanese: 'あ〜',
      keypress: 'z', 
      file: '../../aa.mp3',
      picture: '../../aa.png'
    },
    { english: 'Anya, haha inakute samishii',
      japanese: 'アーニャ、母いなくて寂しい',
      keypress: 'x', 
      file: '../../hahainakutesamishii.mp3',
      picture: '../../hahainakutesamishii.png'
    },
    { english: 'Haha no sonzai koishii',
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
    <div className="App">
      <Menu theme={theme} setTheme={setTheme} />
      <DrumMachine sample={sample} setSample={setSample} samples={samples} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} />
    </div>
  );
}

export default App;
