const data = {
  a: 1,
  b: 2,
  c: {
    d: 2,
    e: 3,
    f: {
      g: 1,
      h: 4,
    },
  },
  i: {
    j: 5,
  },
};

function countUniqueValues(obj, set = new Set()) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      countUniqueValues(obj[key], set);
    } else {
      set.add(obj[key]);
    }
  }

  return set.size;
}

console.log(countUniqueValues(data));
