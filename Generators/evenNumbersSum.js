function* evenNumbersSum() {
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += i * 2;
    yield sum;
  }
}

const generator = evenNumbersSum();

for (let i = 1; i <= 10; i++) {
  console.log(generator.next().value);
}
