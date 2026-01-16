function bubbleSort(arr) {
  let flag;
  do {
    flag = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        flag = true;
      }
    }
  } while (flag);
  return arr;
}
const arr = [-6, 2, 6, -3, 1];
console.log(bubbleSort(arr));

//T.C - O (n^2)
