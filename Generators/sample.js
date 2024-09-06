//Generator Function to Print All Even Numbers from 1-100 in Reverse Order

function* printEven() {
  for (let i = 100; i >= 2; i -= 2) {
    yield i;
  }
}

const generator = printEven();

for (let i = 1; i <= 50; i++) {
  console.log(generator.next().value);
}
