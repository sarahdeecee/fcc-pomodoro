import { CSSTransition, SwitchTransition } from 'react-transition-group';
function Display(props) {
  const {english, romaji, japanese, keypress, file, picture, theme, showDisplay, setShowDisplay } = props;
  const sample = {english, romaji, japanese};
  return (
    <SwitchTransition>
      <CSSTransition classNames="fade"
        key={showDisplay ? 'display-true' : 'display-false'}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        >
        <h1 id="display">{sample[theme.language]}</h1>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Display;