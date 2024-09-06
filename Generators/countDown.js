//Write a generator function that counts down from a specified number to 0

function* countDown(num) {
  while (num >= 0) {
    yield num;
    num--;
  }
}

const n = 5;
const generator = countDown(n);

for (let i = 0; i <= n; i++) {
  console.log(generator.next().value);
}

// const printWithDelay = setInterval(() => {
//   const next = generator.next();

//   if (!next.done) {
//     console.log(next.value);
//   } else {
//     clearInterval(printWithDelay);
//   }
// }, 1000);
