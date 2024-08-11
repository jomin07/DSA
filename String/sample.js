//"aaguaaahhaaaaagjkaa"

function getCount(str) {
  let count = 0;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
      if (count === 2) {
        res++;
        count = 0;
      }
    } else {
      count = 0;
    }
  }
  return res;
}

const str = "aaguaaahhaaaaagjkaa";
console.log(getCount(str));
