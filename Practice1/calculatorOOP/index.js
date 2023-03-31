const CalculatorClass = require("./CalculatorClass");
const { operator, numbers } = require("./fetchData");

const calculator = new CalculatorClass(operator, numbers);

console.log(calculator.init());
