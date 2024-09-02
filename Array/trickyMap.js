const users = [
  { firstName: "Jomin", lastName: "Varghese", age: 23 },
  { firstName: "John", lastName: "Wick", age: 28 },
  { firstName: "Eren", lastName: "Yeager", age: 18 },
  { firstName: "Joey", lastName: "Tribbiani", age: 27 },
];

const res = users.map((person) => person.firstName + " " + person.lastName);
console.log(res);
