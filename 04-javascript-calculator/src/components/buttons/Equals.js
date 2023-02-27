import { Button } from "react-bootstrap";

function EqualsButton(props) {
  const {currentValue, setCurrentValue} = props;
  const expression = currentValue.expression;

  const isOperator = char => {
    return (char === '*' || char === '/' || char === '+' || char === '-' );
  }
  const hasDecimal = numberString => {
    return numberString.includes('.');
  }
  // Change expression to array
  // const expressionArray = Array.from(expression);
  const expressionArray = expression.split(/([^0-9,.])/).filter(elem => elem !== '');
  
  const handleExpression = () => {
    if (!currentValue.reset) {
      let total = 0;
      const evaluatedArray = [];

      // Find significant digits
      let precision = 0;
      for (let elem of expressionArray) {
        console.log('elem ',elem)
        if (!isOperator(elem)) {
          const elemPrecision = !hasDecimal(elem) ? elem.length
            : (elem[0] === '0') ? elem.length-2 : elem.length-1;
          if (elemPrecision > precision) {
            precision = elemPrecision;
          }
        }
        console.log('precision ',precision);
      }

      // Evaluate times/divide first
      let i = 0;
      while (i < expressionArray.length) {
        let sign = 1;
        if (expressionArray[i+1] === '*' && i+2 < expressionArray.length) {
          let first = parseFloat(expressionArray[i]);
          // Handle negative signs
          if (expressionArray[i+2] === '-') {
            i++;
            sign = -1;
          }
          let second = parseFloat(expressionArray[i+2]) * sign;
          const subtotal = first * second;
          evaluatedArray.push(subtotal.toString());
          i = i+3;
        } else if (expressionArray[i+1] === '/' && i+2 < expressionArray.length) {
          let first = parseFloat(expressionArray[i]);
          // Handle negative signs
          if (expressionArray[i+2] === '-') {
            i++;
            sign = -1;
          }
          let second = parseFloat(expressionArray[i+2]) * sign;
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
            total -= parseFloat(evaluatedArray[i+1]);
            i++;
          } else { // If first number is positive
            total += parseFloat(evaluatedArray[i]);
          }
        }
        if ((i === evaluatedArray.length - 1) && (evaluatedArray[i] === '*' || evaluatedArray[i] === '/' || evaluatedArray[i] === '+' || evaluatedArray[i] === '-')) {
        i++;
        } else if (evaluatedArray[i] === '+') {
          total += parseFloat(evaluatedArray[i+1]);
          i++;
        } else if (evaluatedArray[i] === '-') {
          total -= parseFloat(evaluatedArray[i+1]);
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
    <div className="button equals-button">
      <Button variant="secondary" onClick={handleExpression} id="equals">
        =
      </Button>
    </div>
  );
}

export default EqualsButton;