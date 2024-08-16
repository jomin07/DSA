function isPowerOfTwo(n) {
  if (n < 2) return n === 1;

  return n % 2 === 0 && isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(2));
