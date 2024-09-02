//Given an array of arrays, count the total number of elements across all nested arrays.
const data = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

const count = data.reduce((acc, curr) => {
  return acc + curr.length;
}, 0);

const sum = data.reduce((acc, curr) => {
  return (
    acc +
    curr.reduce((innerAcc, innerCurr) => {
      return innerAcc + innerCurr;
    }, 0)
  );
}, 0);

console.log(count);
console.log(sum);
