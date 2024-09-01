const data = [1, [2, [3, [4]], 5], [6, 7], 8];

const flattenArraySum = (arr) => {
  const stack = [...arr];
  let sum = 0;

  while (stack.length) {
    const curr = stack.pop();

    if (Array.isArray(curr)) {
      stack.push(...curr);
    } else {
      sum += curr;
    }
  }

  return sum;
};

console.log(flattenArraySum(data));
