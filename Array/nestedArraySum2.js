//Given an array of objects where each object contains multiple arrays of numbers, sum all the numbers.
const data = [
  { arr1: [1, 2, 3], arr2: [4, 5, 6] },
  { arr1: [7, 8, 9], arr2: [10, 11, 12] },
];

//First Approach
const sum = data.reduce((acc, curr) => {
  const sum1 = curr.arr1.reduce(
    (innerAcc, innerCurr) => innerAcc + innerCurr,
    0
  );
  const sum2 = curr.arr2.reduce(
    (innerAcc, innerCurr) => innerAcc + innerCurr,
    0
  );

  return acc + sum1 + sum2;
}, 0);

console.log(sum);

//Recursive approach

const arr = [
  { arr1: [1, 2, 3], arr2: [4, 5, 6] },
  { arr1: [7, 8, 9], arr2: [10, 11, 12] },
];

const sumNestedNumbers = (obj) => {
  let sum = 0;
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      sum += obj[key].reduce((acc, curr) => acc + curr, 0);
    } else if (typeof obj[key] === "object") {
      sum += sumNestedNumbers(obj[key]);
    }
  }

  return sum;
};

const total = arr.reduce((acc, curr) => acc + sumNestedNumbers(curr), 0);
console.log(total);
