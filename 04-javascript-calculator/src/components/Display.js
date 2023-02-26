function Display(props) {
  const { currentValue } = props;
  return (
    <div className="display">
    {currentValue.expression ? <h4>{currentValue.expression}</h4> : <h4>_</h4>}
      <h1 id="display">{currentValue.display}</h1>
    </div>
  );
}

export default Display;