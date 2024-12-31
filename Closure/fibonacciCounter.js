const fibonacciCounter = () => {
  let curr = 0;
  let next = 1;

  function inner() {
    let temp = curr;
    curr = next;
    next = temp + next;

    return temp;
  }

  return inner;
};

const counter = fibonacciCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 5
console.log(counter()); // 8
console.log(counter()); // 13
console.log(counter()); // 21
console.log(counter()); // 34
console.log(counter()); // 55
