function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let number = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > number) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = number;
  }
  return arr;
}

const arr = [-2, 1, 6, -3, 2];
console.log(insertionSort(arr));
