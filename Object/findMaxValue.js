const data = {
  a: 1,
  b: {
    c: 20,
    d: 3,
    e: {
      f: 45,
      g: "hello",
    },
  },
  h: 15,
  i: "world",
  j: [6, 17, { k: 30 }],
};

function findMaxValue(obj) {
  let max = -Infinity;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      max = Math.max(max, obj[key]);
    } else if (typeof obj[key] === "object") {
      const nestedMax = findMaxValue(obj[key]);
      max = Math.max(max, nestedMax);
    }
  }
  return max;
}

console.log(findMaxValue(data));
// 45
