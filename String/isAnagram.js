function isAnagram(str1, str2){
    console.log('Are these two strings anagrams of each other?');
    const x = str1.split("").sort().join("");
    const y = str2.split("").sort().join("");

    return x === y;
}

console.log(isAnagram('anagram','naagramss'));