function findPairsWithSum(arr, sum) {
  const seen = {};
  const pairs = [];
  for (let num of arr) {
    const complement = sum - num;
    if (seen[complement]) pairs.push([complement, num]);

    seen[num] = true;
  }
  return pairs;
}

console.log(findPairsWithSum([1, 4, 0, 3, 7, -3], 4));
// [[3, 1], [4, 0], [-3, 7]]
