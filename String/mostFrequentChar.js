const mostFrequentChar = (str) => {
  const freq = {};
  let maxCount = 0;
  let maxChar = "";

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > maxCount) {
      maxChar = char;
      maxCount = freq[char];
    }
  }

  return maxChar;
};

console.log(mostFrequentChar("AABBBCCAAAABCCCB")); //A
