//count zeros;
const nestedArray = [
  [0, 1, 0],
  [1, 0, [0, 1]],
  [[1, 0], 0],
  1,
  0,
  0,
  [0, [1, 0]],
];

const countZeros = (obj) => {
  let count = 0;
  for (let key in obj) {
    if (obj[key] === 0) {
      count++;
    } else if (Array.isArray(obj[key])) {
      count += countZeros(obj[key]);
    }
  }
  return count;
};

console.log(countZeros(nestedArray));
