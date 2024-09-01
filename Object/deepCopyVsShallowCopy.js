//deep copy vs shallow copy
const person = {
  name: "Bob",
  age: 30,
  hobbies: ["reading", "traveling"],
  address: {
    city: "Kochi",
  },
};

const shallowCopy = { ...person };

const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.name = "J";
deepCopy.hobbies[0] = "Movies";
deepCopy.address.city = "New York";
console.log(person);
console.log(deepCopy);
