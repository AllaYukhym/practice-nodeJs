const [operator, ...args] = process.argv.slice(2);

const numbers = args.map((item) => Number(item));

module.export = {
  operator,
  numbers,
};
