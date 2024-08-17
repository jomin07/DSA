//"aaguaaahhaaaaagjkaa"

function getCount(str) {
  let count = 0;
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      if (flag) count++;
      flag = !flag;
    } else {
      flag = false;
    }
  }
  return count;
}

const str = "aaguaaahhaaaaagjkaa";
console.log(getCount(str));
