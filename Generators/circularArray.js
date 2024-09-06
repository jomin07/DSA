//Write a generator function that infinitely cycles through the elements of an array.
function* circularArray(arr) {
  let index = 0;
  while (true) {
    yield arr[index % arr.length];
    index++;
  }
}

const arr = ["red", "blue", "green"];
const generator = circularArray(arr);

for (let i = 0; i <= 6; i++) {
  console.log(generator.next().value);
}
