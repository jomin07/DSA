// Question: Given an array of strings, remove the numbers from each string.

// Input: ["abc123", "def456", "ghi789"]
// Output: ["abc", "def", "ghi"]

const removeNumbers = (arr) => {
  const res = arr.map((x) => {
    return x
      .split("")
      .filter((x) => isNaN(x))
      .join("");
  });

  return res;
};

console.log(removeNumbers(["abc123", "def456", "ghi789"]));
