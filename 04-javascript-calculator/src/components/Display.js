function Display(props) {
  const { currentValue } = props;
  return (
    <div id="display">
      {currentValue.expression ? <h4>{currentValue.expression}</h4> : <h4></h4>}
      <h1>{currentValue.display}</h1>
    </div>
  );
}

export default Display;