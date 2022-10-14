import { Typography } from '@mui/material';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
function Display(props) {
  const {english, romaji, japanese, theme, showTransition } = props;
  const sample = {english, romaji, japanese};
  return (
    <SwitchTransition>
      <CSSTransition classNames="fade"
        key={showTransition.display ? 'display-true' : 'display-false'}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        >
        <Typography variant="h3" component="h1" id="display" p={1} sx={{minHeight: '1em'}}>
          {sample[theme.language]}
        </Typography>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Display;