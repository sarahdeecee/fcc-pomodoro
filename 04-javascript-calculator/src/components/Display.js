function Display(props) {
  const { currentValue } = props;
  return (
    <div className="display">
    {currentValue.expression ? <h4>{currentValue.expression}</h4> : <h4 className="no-show">0</h4>}
      <h1 id="display">{currentValue.display}</h1>
    </div>
  );
}

export default Display;