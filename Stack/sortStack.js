function sortStack(arr) {
  const tempStack = [];

  while (arr.length) {
    const temp = arr.pop();

    while (tempStack.length && tempStack[tempStack.length - 1] < temp) {
      arr.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  while (tempStack.length) {
    arr.push(tempStack.pop());
  }

  return arr;
}

const arr = [34, 3, 31, 98, 92, 23];
console.log(sortStack(arr));
