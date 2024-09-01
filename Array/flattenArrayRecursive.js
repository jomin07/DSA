const data = [1, [2, [3, [4]], 5], [6, 7], 8];
//Given an array that contains other arrays, possibly nested to multiple levels, flatten the array and sum all the elements.

//Flattens the array to one level by default
// const arr = data.flat();
// const arr2 = data.flat(Infinity);
// console.log(arr);
// console.log(arr2);

//By recursion to flatten array

// function flattenArray(arr) {
//   return arr.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       return acc.concat(flattenArray(curr));
//     }

//     return acc.concat(curr);
//   }, []);
// }
// console.log(flattenArray(data));

const flattenArraySum = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc + flattenArraySum(curr);
    }

    return acc + curr;
  }, 0);
};

console.log(flattenArraySum(data));
