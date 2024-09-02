let n = 92;
let diff = 13;

function print(n, diff) {
  if (n <= 0 || diff < 0) return;
  if (n >= 1 && diff >= 0) {
    console.log(n);
  }

  print(n - diff, diff - 1);
}
print(n, diff);
