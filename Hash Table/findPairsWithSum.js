//Find Pairs with Sum of 4 in an Array using a Hash Table

function findPairsWithSum(arr, sum) {
  const hashTable = {};
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let diff = sum - arr[i];
    if (hashTable[diff] !== undefined) {
      pairs.push([diff, arr[i]]);
    }

    hashTable[arr[i]] = i;
  }
  return pairs;
}

console.log(findPairsWithSum([1, 4, 0, 3, 7, -3], 4));
// [[3, 1], [4, 0], [-3, 7]]
