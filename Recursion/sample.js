function binarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) return "Not Found";

  let mid = Math.floor((left + right) / 2);

  if (target === arr[mid]) {
    return mid;
  }

  if (target < mid) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 55));
