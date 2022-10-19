import { Button } from "react-bootstrap";

function EqualsButton(props) {
  const {currentValue, setCurrentValue} = props;
  const expression = currentValue.expression;

  const isOperator = char => {
    return (char === 'x' || char === '/' || char === '+' || char === '-' );
  }
  // Change expression to array
  // const expressionArray = Array.from(expression);
  const expressionArray = expression.split(/([^0-9,\.])/).filter(elem => elem !== '');
  // console.log('exp ',expressionArray);
  
  const handleExpression = () => {
    if (!currentValue.reset) {
      let total = 0;
      const evaluatedArray = [];

      // Evaluate times/divide first
      let i = 0;
      while (i < expressionArray.length) {
        let sign = 1;
        if (expressionArray[i+1] === 'x' && i+2 < expressionArray.length) {
          let first = parseInt(expressionArray[i]);
          // Handle negative signs
          if (expressionArray[i+2] === '-') {
            i++;
            sign = -1;
          }
          let second = parseInt(expressionArray[i+2]) * sign;
          const subtotal = first * second;
          evaluatedArray.push(subtotal.toString());
          i = i+3;
        } else if (expressionArray[i+1] === '/' && i+2 < expressionArray.length) {
          let first = parseInt(expressionArray[i]);
          // Handle negative signs
          if (expressionArray[i+2] === '-') {
            i++;
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
      
      // console.log('evulatedArray ',evaluatedArray);
      // Add/subtract
      for (let i = 0; i < evaluatedArray.length; i++) {
        if (i === 0) {
          // If first number is negative
          if (evaluatedArray[i] === '-' && !isOperator(evaluatedArray[i+1])) {
            total -= parseInt(evaluatedArray[i+1]);
            i++;
          } else { // If first number is positive
            total += parseInt(evaluatedArray[i]);
          }
        }
        if ((i === evaluatedArray.length - 1) && (evaluatedArray[i] === 'x' || evaluatedArray[i] === '/' || evaluatedArray[i] === '+' || evaluatedArray[i] === '-')) {
        i++;
        } else if (evaluatedArray[i] === '+') {
          total += parseInt(evaluatedArray[i+1]);
          i++;
        } else if (evaluatedArray[i] === '-') {
          total -= parseInt(evaluatedArray[i+1]);
          i++;
        }
      }

      let totalExpression = `${expression}=${total}`;

      // If expression ends in operator, remove operator
      if (isOperator(expression.charAt(expression.length-1))) {
        totalExpression = `${expression.slice(0,-1)}=${total}`;
      }
      setCurrentValue({...currentValue, display: total, expression: totalExpression, number: total, operator: '', reset: true});
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