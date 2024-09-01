//Find the Count of Each Character in a String using a Hash Table

const countCharacters = (str) => {
  const hashTable = {};

  for (let char of str) {
    hashTable[char] = (hashTable[char] || 0) + 1;
  }

  return hashTable;
};

console.log(countCharacters("aaabacaabccd"));
// {a: 6, b: 2, c: 3, d: 1}
