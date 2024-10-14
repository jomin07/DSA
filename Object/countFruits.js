const data = {
  a: "apple",
  b: {
    c: "banana",
    d: "apple",
    e: {
      f: "cherry",
      g: "banana",
    },
  },
  h: "apple",
  i: "date",
  j: ["banana", { k: "apple" }],
};

const countFruits = (obj, res = {}) => {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      res[obj[key]] = (res[obj[key]] || 0) + 1;
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      countFruits(obj[key], res);
    }
  }
  return res;
};

console.log(countFruits(data));

// Output: { apple: 4, banana: 3, cherry: 1, date: 1 }
