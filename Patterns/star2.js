let n = 4;
let s = "";

for (let i = 1; i <= n; i++) {
  let flag = true;
  for (let j = 1; j < 2 * n; j++) {
    if (j > n - i && j < n + i && flag) {
      s += "*";
      flag = false;
    } else {
      s += " ";
      flag = true;
    }
  }
  s += "\n";
}

console.log(s);
