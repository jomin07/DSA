//Write a generator function that yields powers of two up to a given limit

function* powerOfTwo(num) {
  for (let i = 1; i <= num; i++) {
    let flag = false;
    let n = i;
    while (n >= 1) {
      if (n === 1) break;
      if (n % 2 !== 0) {
        flag = true;
        break;
      }
      n /= 2;
    }

    if (!flag) yield i;
  }
}

const generator = powerOfTwo(1024);
let next = generator.next();

while (!next.done) {
  console.log(next.value);
  next = generator.next();
}
