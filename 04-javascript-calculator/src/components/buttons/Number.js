function NumberButton(props) {
  const { value } = props;
  return (
    <div id={value.word}>
      {value.char}
    </div>
  );
}

export default NumberButton;