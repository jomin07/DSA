function findSecondLeastFrequent(arr) {
  const freq = {};

  let min1Key;
  let min2Key;

  let min1 = Infinity;
  let min2 = Infinity;

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const key in freq) {
    if (freq[key] < min1) {
      min2 = min1;
      min1 = freq[key];

      min2Key = min1Key;
      min1Key = key;
    } else if (freq[key] < min2) {
      min2 = freq[key];
      min2Key = key;
    }
  }

  console.log(freq);

  console.log(
    `Min 1 is ${min1Key} : ${min1} and Min 2 is ${min2Key} : ${min2}`
  );

  return [min1Key, min2Key];
}

const arr = [1, 3, 2, 1, 2, 2, 3, 4, 3, 2];
const result = findSecondLeastFrequent(arr);
console.log(result);
// Output{ '1': 2, '2': 4, '3': 3, '4': 1 }
// Min 1 is 4 : 1 and Min 2 is 1 : 2
// [ '4', '1' ]
