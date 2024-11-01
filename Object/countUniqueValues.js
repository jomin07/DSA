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
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      set.add(obj[key]);
    } else if (typeof obj[key] === "object") {
      countUniqueValues(obj[key], set);
    }
  }

  return set.size;
}

console.log(countUniqueValues(data));
