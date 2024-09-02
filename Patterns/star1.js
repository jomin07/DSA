let s = "";
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < 2 * n; j++) {
    if (j > n - i && j < n + i) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}

console.log(s);
