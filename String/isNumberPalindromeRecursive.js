function isNumberPalindrome(n) {
  return helper(n) === n;
}

function helper(n, rev = 0) {
  if (n === 0) return rev;

  let rem = n % 10;

  return helper(Math.floor(n / 10), rev * 10 + rem);
}
console.log(isNumberPalindrome(121));
