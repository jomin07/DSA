//Given an array of strings, group anagrams together
function groupAnagrams(arr) {
  const res = {};

  for (let str of arr) {
    let key = str.split("").sort().join("");

    res[key] = res[key] || [];
    res[key].push(str);
  }

  return Object.values(res);
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
