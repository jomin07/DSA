const inp = [
  { name: "firstname", value: "johndoe" },
  { name: "age", value: "28" },
  { name: "language", value: "English" },
  { name: "language", value: "Tamil" },
  { name: "language", value: "Hindi" },
];

// Output = {
//   firstname: "johndoe",
//   age: "28",
//   language: ["English", "Tamil", "Hindi"],
// };

const output = inp.reduce((acc, curr) => {
  if (acc[curr.name]) {
    if (Array.isArray(acc[curr.name])) {
      acc[curr.name] = [...acc[curr.name], curr.value];
    } else {
      acc[curr.name] = [acc[curr.name], curr.value];
    }
  } else {
    acc[curr.name] = curr.value;
  }

  return acc;
}, {});

console.log(output);
