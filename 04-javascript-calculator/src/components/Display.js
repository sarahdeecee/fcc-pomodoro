function Display(props) {
  const { currentValue } = props;
  return (
    <div id="display">
      <h1>{currentValue}</h1>
    </div>
  );
}

export default Display;