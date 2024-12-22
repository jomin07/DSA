const findLargestSubstring = (str) => {
  let currentSubString = "";
  let maxSubString = "";

  for (let i = 0; i < str.length; i++) {
    currentSubString += str[i];

    if (str[i] !== str[i + 1]) {
      if (currentSubString.length > maxSubString.length) {
        maxSubString = currentSubString;
      }

      currentSubString = "";
    }
  }

  return maxSubString;
};

console.log(findLargestSubstring("AABBBCCAAAABCCC")); // Output: "AAAA"
