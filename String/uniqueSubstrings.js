const uniqueSubstrings = (str) => {
  let uniques = new Set();
  let string;

  for (let i = 0; i < str.length; i++) {
    string = "";

    for (let j = i; j < str.length; j++) {
      string += str[j];
      if (!uniques.has(string)) uniques.add(string);
    }
  }

  return [...uniques];
};

console.log(uniqueSubstrings("ABC")); // Output: ["A", "AB", "ABC", "B", "BC", "C"]
