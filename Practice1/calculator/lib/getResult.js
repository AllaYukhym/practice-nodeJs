const calculate = (op, numbersArr) => {
  switch (op) {
    case "sum":
      result = numbersArr.reduce((total, number) => total + number);
      break;

    case "sub":
      result = numbersArr.reduce((total, number) => total - number);
      break;

    case "div":
      result = numbersArr.reduce((total, number) => total / number);
      break;

    case "mult":
      result = numbersArr.reduce((total, number) => total * number);
      break;

    default:
      result = "Uknown operation type";
      break;
  }
  return result;
};

module.export = calculate;
