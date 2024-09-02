const n = 4;
let s = "";
let k = 0;

for (let i = 1; i < 2 * n; i++) {
  i <= n ? k++ : k--;
  for (let j = 1; j < 2 * n; j++) {
    if (j > n - k && j < n + k) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}

console.log(s);
