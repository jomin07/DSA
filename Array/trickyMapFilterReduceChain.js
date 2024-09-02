const users = [
  { firstName: "Jomin", lastName: "Varghese", age: 23 },
  { firstName: "John", lastName: "Wick", age: 28 },
  { firstName: "Eren", lastName: "Yeager", age: 18 },
  { firstName: "Joey", lastName: "Tribbiani", age: 28 },
];

const res = users
  .filter((user) => user.age < 24)
  .map((x) => x.firstName + " " + x.lastName);

console.log(res);

//using reduce
const people = [
  { firstName: "Jomin", lastName: "Varghese", age: 23 },
  { firstName: "John", lastName: "Wick", age: 28 },
  { firstName: "Eren", lastName: "Yeager", age: 18 },
  { firstName: "Joey", lastName: "Tribbiani", age: 28 },
];

const output = people.reduce((acc, curr) => {
  if (curr.age > 24) acc.push(`${curr.firstName} ${curr.lastName}`);
  return acc;
}, []);

console.log(output);
