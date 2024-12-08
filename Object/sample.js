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

const output = inp.reduce((acc, { name, value }) => {
  if (acc[name]) {
    // If the key already exists, ensure it's an array and add the value
    acc[name] = Array.isArray(acc[name])
      ? [...acc[name], value]
      : [acc[name], value];
  } else {
    // If the key doesn't exist, initialize it with the value
    acc[name] = value;
  }
  return acc;
}, {});

console.log(output);

const res = inp.reduce((acc, curr) => {
  if (curr.name === "language") {
    if (acc[curr.name]) {
      acc[curr.name].push(curr.value);
    } else {
      acc[curr.name] = [curr.value];
    }
  } else {
    acc[curr.name] = curr.value;
  }

  return acc;
}, {});

console.log(res);
