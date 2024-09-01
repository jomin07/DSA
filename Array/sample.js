const data = [
  [10, 20, 30],
  [40, 50],
  [60, 70, 80, 90],
];

const { total, count } = data.reduce(
  (acc, curr) => {
    acc.count += curr.length;
    acc.total += curr.reduce((innerAcc, innerCurr) => innerAcc + innerCurr, 0);

    return acc;
  },
  { total: 0, count: 0 }
);

console.log(total);
console.log(count);
console.log("Avergae : ", total / count);
