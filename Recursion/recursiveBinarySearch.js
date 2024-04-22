function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right){
    if (left > right) {
        return - 1;
    }
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return search(arr, target, mid + 1, right)
    } else if(arr[mid] > target) {
        return search(arr, target, left, mid - 1);
    }
}

//Array must be sorted
console.log(recursiveBinarySearch([2,3,5,6],5));