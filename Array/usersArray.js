const users = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 22, city: "Chicago" },
  { name: "David", age: 35, city: "Houston" },
  { name: "Eve", age: 28, city: "Phoenix" },
];

const result = users.map((user) => {
  return user.city;
});

const res = users.reduce((acc, curr) => {
  acc.push(curr.city);
  return acc;
}, []);

console.log(result);
console.log(res);
