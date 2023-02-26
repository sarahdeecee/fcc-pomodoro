function Display(props) {
  const { currentValue } = props;
  return (<>
    {currentValue.expression ? <h4>{currentValue.expression}</h4> : <h4></h4>}
    <div id="display">
      <h1>{currentValue.display}</h1>
    </div>
    </>
  );
}

export default Display;