function* printEven() {
  for (let i = 10; i >= 2; i -= 2) {
    yield i;
  }
}

const generator = printEven();

const printEvenWithDelay = setInterval(() => {
  const nextValue = generator.next();
  if (!nextValue.done) {
    console.log(nextValue.value);
  } else {
    clearInterval(printEvenWithDelay);
  }
}, 1000);
