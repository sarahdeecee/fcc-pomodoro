function OperatorButton(props) {
  const { operator } = props;
  return (
    <div id={operator}>
      {operator}
    </div>
  );
}

export default OperatorButton;