import { Button } from "react-bootstrap";

function EqualsButton(props) {
  const {currentValue, setCurrentValue} = props;
  const expression = currentValue.expression;

  // Change expression to array
  // const expressionArray = Array.from(expression);
  const expressionArray = expression.split(/([^0-9,\.])/);
  // console.log('exp ',expressionArray);
  
  const handleExpression = () => {
    if (!currentValue.reset) {
      let total = 0;
      const evaluatedArray = [];

      // Evaluate times/divide first
      let i = 0;
      while (i < expressionArray.length) {
        let sign = 1;
        if (expressionArray[i+1] === 'x') {
          let first = parseInt(expressionArray[i]);
          // Handle negative signs
          if (expressionArray[i+2] === '') {
            i+=2;
            sign = -1;
          }
          let second = parseInt(expressionArray[i+2]) * sign;
          const subtotal = first * second;
          evaluatedArray.push(subtotal.toString());
          i = i+3;
        } else if (expressionArray[i+1] === '/') {
          let first = parseInt(expressionArray[i]);
          // Handle negative signs
          if (expressionArray[i+2] === '') {
            i+=2;
            sign = -1;
          }
          let second = parseInt(expressionArray[i+2]) * sign;
          const subtotal = first / second;
          evaluatedArray.push(subtotal.toString());
          i = i+3;
        } else {
          evaluatedArray.push(expressionArray[i]);
          i++;
        }
      }
      
      // Add/subtract
      for (let i = 0; i < evaluatedArray.length; i++) {
        if (i === 0) {
          total += parseInt(evaluatedArray[i]);
        }
        if (evaluatedArray[i] === '+') {
          total += parseInt(evaluatedArray[i+1]);
          i++;
        } else if (evaluatedArray[i] === '-') {
          total -= parseInt(evaluatedArray[i+1]);
          i++;
        }
      }

      const totalExpression = `${currentValue.expression}=${total}`;
      setCurrentValue({...currentValue, display: total, expression: totalExpression, number: '', operator: '', reset: true});
    }
  }
  return (
    <div className="button equals-button" id="equals">
      <Button variant="secondary" onClick={handleExpression}>
        =
      </Button>
    </div>
  );
}

export default EqualsButton;