const data = [
  { values: [1, 2, 3] },
  { values: [4, 5, 6] },
  { values: [7, 8, 9] },
];

const sum = data.reduce((acc, curr) => {
  return (
    acc +
    curr.values.reduce((innerAcc, innerCurr) => {
      return innerAcc + innerCurr;
    }, 0)
  );
}, 0);

console.log(sum);
