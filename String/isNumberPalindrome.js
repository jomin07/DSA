//Check if a Number is a Palindrome(without using inbuilt methods)

const isNumberPalindrome = (num) => {
  let origninalNum = num;
  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  return rev === origninalNum;
};

console.log(isNumberPalindrome(121)); // true
console.log(isNumberPalindrome(123)); // false
