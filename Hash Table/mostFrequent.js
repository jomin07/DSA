function mostFrequent(arr) {
  const freq = {};
  let max = -Infinity;
  let maxKey;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > max) {
      max = freq[num];
      maxKey = num;
    }
  }

  return maxKey;
}
console.log(mostFrequent([1, 3, 2, 3, 2, 3, 4, 3, 5])); // Output: 3
