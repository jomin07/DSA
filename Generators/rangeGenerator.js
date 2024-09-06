//Write a generator function that generates numbers in a range from start to end, with a step value

function* rangeGenerator(start, end, step) {
  while (start <= end) {
    yield start;
    start += step;
  }
}

const generator = rangeGenerator(1, 10, 2);

for (let num of generator) {
  //does .next().value in background
  console.log(num);
}
