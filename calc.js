// sum
// sub
// mult
// div
// node calc.js sum 2 3 4

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((el) => Number(el));

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

console.log(calculate(operator, numbers));
