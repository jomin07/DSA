function factorial(n) {
  if (n < 2) return n;
  let res = 1;

  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(factorial(5));
