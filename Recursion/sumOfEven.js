//sum of even nos
function sum(arr, i = 0) {
  if (i >= arr.length) return 0;

  let res = 0;
  if (arr[i] % 2 === 0) res += arr[i];

  return res + sum(arr, i + 1);
}

const arr = [1, 2, 3, 4, 5];
console.log(sum(arr));
