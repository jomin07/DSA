//Given a string, find the first non-repeating character. If there is no such character, return null

function firstNonRepeatedChar(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] === 1) return key;
  }
  return null;
}

console.log(firstNonRepeatedChar("aabbcde")); // Output: 'c'
console.log(firstNonRepeatedChar("aabbcc")); // Output: null
