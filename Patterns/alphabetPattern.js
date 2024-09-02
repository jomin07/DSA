const n = 4;
let s = "";

for (let i = 1; i <= n; i++) {
  let k = 1;
  for (let j = 1; j < 2 * n; j++) {
    if (j >= n - 1 + i || j <= n + 1 - i) {
      s += String.fromCharCode(k + 64);
      j < n ? k++ : k--;
    } else {
      s += " ";
    }
  }
  s += "\n";
}
console.log(s);
