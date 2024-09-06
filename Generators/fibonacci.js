//Generate an infinite sequence of Fibonacci numbers using a generator.

function* fibonacci() {
  let res = [];

  for (let i = 0; i <= 10; i++) {
    if (i <= 1) {
      res.push(i);
      yield res;
    } else {
      res.push(res[i - 2] + res[i - 1]);
      yield res;
    }
  }
}

const generator = fibonacci();
for (let i = 0; i <= 10; i++) {
  console.log(generator.next().value);
}
