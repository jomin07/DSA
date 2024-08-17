function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return "Not Found";
  }
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < mid) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}

//Array must be sorted
console.log(recursiveBinarySearch([2, 3, 5, 6], 53));
