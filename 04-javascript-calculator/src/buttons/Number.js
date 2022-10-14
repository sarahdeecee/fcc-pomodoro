function NumberButton(props) {
  const { value } = props;
  return (
    <div id={value}>
      {value}
    </div>
  );
}

export default NumberButton;