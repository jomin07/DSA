//Write a generator function that yields powers of two up to a given limit

function* powerOfTwo(num) {
  for (let i = 1; i <= num; i++) {
    let n = i;
    while (n > 1 && n % 2 === 0) {
      n /= 2;
    }
    if (n === 1) yield i;
  }
}

const generator = powerOfTwo(40);
let next = generator.next();

while (!next.done) {
  console.log(next.value);
  next = generator.next();
}
