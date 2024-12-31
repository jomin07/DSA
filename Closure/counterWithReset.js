//Create a counter function that increments its value with each call but can also be reset to zero using a method

const counterWithReset = () => {
  let i = 0;

  return {
    increment: function () {
      return ++i;
    },
    reset: function () {
      i = 0;
    },
  };
};

const makeCounter = counterWithReset();
console.log(makeCounter.increment());
console.log(makeCounter.increment());
console.log(makeCounter.increment());

makeCounter.reset();
console.log(makeCounter.increment());
console.log(makeCounter.increment());
