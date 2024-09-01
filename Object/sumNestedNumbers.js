//Write a function to calculate the sum of all numeric values in a nested object.
const data = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: {
      f: 4,
      g: "hello",
    },
  },
  h: 5,
  i: "world",
  j: [6, 7, { k: 8 }],
};

function sumNestedNumbers(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += sumNestedNumbers(obj[key]);
    }
  }

  return sum;
}

console.log(sumNestedNumbers(data));
