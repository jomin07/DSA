//prime numbers upto 30
function* prime() {
  let num = 2;

  while (num >= 2 && num <= 30) {
    let flag = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        flag = true;
        break;
      }
    }
    if (!flag) yield num;
    num++;
  }
}

const generator = prime();

let next = generator.next();

while (!next.done) {
  console.log(next.value);
  next = generator.next();
}
