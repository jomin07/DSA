//Given an array of arrays, find the largest number across all nested arrays.
const data = [
  [10, 20, 30],
  [400, 50, 5],
  [70, 80, 90],
];

const largest = data.reduce((acc, curr) => {
  let maxInCurrentArray = Math.max(...curr);
  return acc > maxInCurrentArray ? acc : maxInCurrentArray;
}, -Infinity);

console.log(largest);
