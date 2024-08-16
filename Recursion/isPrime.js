function isPrime(n, divisor = 2) {
  if (n <= 2) return n === 2;

  if (n % divisor === 0) return false;

  if (divisor > Math.sqrt(n)) return true;

  return isPrime(n, divisor + 1);
}

console.log(isPrime(3));
