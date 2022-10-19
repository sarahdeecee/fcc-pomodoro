import { Button } from "react-bootstrap";

function EqualsButton(props) {
  const {currentValue, setCurrentValue} = props;
  const expression = currentValue.expression;

  // Change expression to array
  // const expressionArray = Array.from(expression);
  const expressionArray = expression.split(/([^0-9,\.])/);
  
  const handleExpression = () => {
    let total = 0;
    const evaluatedArray = [];
    let i = 0;
    while (i < expressionArray.length) {
      // Find times/divide first
      if (expressionArray[i+1] === 'x') {
        const subtotal = parseInt(expressionArray[i]) * parseInt(expressionArray[i+2]);
        evaluatedArray.push(subtotal.toString());
        i = i+3;
      } else if (expressionArray[i+1] === '/') {
        const subtotal = parseInt(expressionArray[i]) / parseInt(expressionArray[i+2]);
        evaluatedArray.push(subtotal.toString());
        i = i+3;
      } else {
        evaluatedArray.push(expressionArray[i]);
        i++;
      }
      console.log('evaluated array ',evaluatedArray);
    }
    console.log('finished array ',evaluatedArray);
    
    // Add/subtract
    for (let i = 0; i < evaluatedArray.length; i++) {
      console.log('eval ',evaluatedArray[i]);
      if (i===0) {
        total += parseInt(evaluatedArray[i]);
        console.log('single number ',total);
      }
      if (evaluatedArray[i] === '+') {
        total += parseInt(evaluatedArray[i+1]);
        i++;
      } else if (evaluatedArray[i] === '-') {
        total -= parseInt(evaluatedArray[i+1]);
        i++;
      }
      console.log('total ',total);
    }

    const totalExpression = `${currentValue.expression}=${total}`;
    setCurrentValue({...currentValue, display: total, expression: totalExpression, number: '', operator: '', reset: true});
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