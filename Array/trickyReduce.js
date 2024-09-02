const users = [
  { firstName: "Jomin", lastName: "Varghese", age: 23 },
  { firstName: "John", lastName: "Wick", age: 28 },
  { firstName: "Eren", lastName: "Yeager", age: 18 },
  { firstName: "Joey", lastName: "Tribbiani", age: 28 },
];

const res = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(res);
