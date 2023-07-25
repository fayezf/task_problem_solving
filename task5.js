const calculate = function(num1, operator, num2) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      if (num2 === 0) {
        throw new Error("Cannot divide by zero!");
      }
      return num1 / num2;
    } else {
      throw new Error("Invalid operator!");
    }
  };
  console.log(calculate(5, '+', 3));
//   console.log(calculate(10, '-', 4));
//   console.log(calculate(2, '*', 6)); 
//   console.log(calculate(10, '/', 2)); 
    