//top 2 numbers with max occurances
function maxOccurrence(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max1Key;
  let max2Key;
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > max1) {
      max2 = max1;
      max1 = freq[key];
      max1Key = key;
    } else if (freq[key] > max2) {
      max2 = freq[key];
      max2Key = key;
    }
  }

  console.log(freq);

  console.log("Max1 occurring value :", max1Key);
  console.log("Max2 occurring value :", max2Key);
}

const arr = [1, 3, 2, 3, 3, 3, 4, 3, 5, 4, 4];
maxOccurrence(arr);
