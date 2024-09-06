//Write a generator function that yields even numbers starting from a given number.
function* evenNumber(num) {
  while (true) {
    if (num % 2 === 0) {
      yield num;
    }
    num++;
  }
}

const generator = evenNumber(15);

for (let i = 1; i <= 10; i++) {
  console.log(generator.next().value);
}
