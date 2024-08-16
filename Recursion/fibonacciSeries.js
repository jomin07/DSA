function fibonacciSeries(n) {
  if (n < 2) return n;

  return fibonacciSeries(n - 2) + fibonacciSeries(n - 1);
}

function printFibonacci(n) {
  for (let i = 0; i <= n; i++) {
    console.log(`${i} : ${fibonacciSeries(i)}`);
  }
}

printFibonacci(4);
