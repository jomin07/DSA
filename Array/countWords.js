const data = [
  ["Hello world", "How are you"],
  ["This is a test"],
  ["JavaScript is fun"],
];

const count = data.reduce((acc, curr) => {
  acc += curr.reduce(
    (innerAcc, innerCurr) => innerAcc + innerCurr.split(" ").length,
    0
  );
  return acc;
}, 0);

console.log(count);
