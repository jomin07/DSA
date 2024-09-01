//Given a nested object that contains arrays of numbers, write a function to sum all the numbers within the arrays.

const data = {
  a: [1, 2, 3],
  b: {
    c: [4, 5],
    d: {
      e: [6],
      f: [7, 8, 9],
    },
  },
};

function sumNestedArrays(obj) {
  let sum = 0;
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      let nestedSum = obj[key].reduce((acc, curr) => acc + curr, 0);
      sum += nestedSum;
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += sumNestedArrays(obj[key]);
    }
  }
  return sum;
}

console.log(sumNestedArrays(data));
