const al = [{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }];
const ab = [{ af: [23, 23] }, { af: [23, 23] }, { af: [23, 23] }];
const ac = [
  { af: [{ a: [34, 23, 42] }] },
  { af: [{ a: [34, 233, 342] }] },
  { af: [{ a: [34, 23, 42] }] },
  { af: [{ a: [34, 23, 42] }] },
];
//find sum of the elements of each arrays

const sum3 = ac.reduce((acc, curr) => {
  return (
    acc +
    curr.af.reduce((innerAcc, innerCurr) => {
      return (
        innerAcc +
        innerCurr.a.reduce((deepAcc, deepCurr) => {
          return deepAcc + deepCurr;
        }, 0)
      );
    }, 0)
  );
}, 0);

const sum = al.reduce((acc, curr) => {
  return acc + curr.a;
}, 0);

const sum2 = ab.reduce((acc, curr) => {
  return (
    acc +
    curr.af.reduce((innerAcc, innerCurr) => {
      return innerAcc + innerCurr;
    }, 0)
  );
}, 0);

console.log(sum3);
console.log(sum2);
console.log(sum);
