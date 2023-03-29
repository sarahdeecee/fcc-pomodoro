import { Pause, PlayArrow, RestartAlt } from '@mui/icons-material';

function Controls(props) {
  const {play, setPlay, reset} = props;

  const handlePause = () => {
    setPlay(false);
  }

  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <div>
      {play ? <Pause id="start_stop" onClick={handlePause} /> : <PlayArrow id="start_stop" onClick={handlePlay} /> }
      {/* <PlayArrow id="start_stop" onClick={handlePlay} />
      <Pause id="start_stop" onClick={handlePause} /> */}
      <RestartAlt id="reset" onClick={reset} />
    </div>
  );
}
export default Controls;
