function areIsomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    // Check if char1 has already been mapped to a different char2
    if (
      (map1[char1] && map1[char1] !== char2) ||
      (map2[char2] && map2[char2] !== char1)
    )
      return false;

    map1[char1] = char2;
    map2[char2] = char1;
  }

  return true;
}

console.log(areIsomorphic("egg", "add")); // Output: true
console.log(areIsomorphic("foo", "bar")); // Output: false
console.log(areIsomorphic("paper", "title")); // Output: true
console.log(areIsomorphic("abc", "def")); // Output: true
