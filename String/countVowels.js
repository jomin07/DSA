//Find the Count of Vowels in a String
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
};

console.log(countVowels("hello world")); // 3
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("JOMIN")); // 2
