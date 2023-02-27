const calculate = (op, numArray) => {
  let result = null;

  switch (op) {
    case 'sum':
      result = numArray.reduce((acc, el) => {
        return acc + el;
      });
      break;
    case 'sub':
      result = numArray.reduce((acc, el) => {
        return acc - el;
      });
      break;

    case 'mult':
      result = numArray.reduce((acc, el) => {
        return acc * el;
      });
      break;

    case 'div':
      result = numArray.reduce((acc, el) => {
        return acc / el;
      });
      break;

    default:
      result = 'Unknown operation type';
      break;
  }

  return result;
};

module.exports = calculate;
